import React from 'react';
import { Box, Text } from 'ink';
import type { CertificateSchema } from '../resume.schema.js';

type CertificatesProps = {
    certificates: ReturnType<typeof CertificateSchema.parse>[] | undefined;
};

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
    if (!certificates || certificates.length === 0) return null;

    return (
        <Box flexDirection="column" marginY={1}>
            <Box marginBottom={1}>
                <Text bold underline color="yellow">Certificates</Text>
            </Box>

            {certificates.map((certificate, index) => (
                <Box key={index} flexDirection="column" marginBottom={1}>
                    <Box>
                        <Text bold>{certificate.name}</Text>
                    </Box>

                    <Box>
                        <Text>
                            {certificate.issuer}
                            {certificate.date ? ` (${certificate.date})` : ''}
                        </Text>
                    </Box>

                    {certificate.url && (
                        <Text dimColor>{certificate.url}</Text>
                    )}
                </Box>
            ))}
        </Box>
    );
}; 