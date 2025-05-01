import React from 'react';
import { Box, Text } from 'ink';
import type { ReferenceSchema } from '../resume.schema.js';

type ReferencesProps = {
    references: ReturnType<typeof ReferenceSchema.parse>[] | undefined;
};

export const References: React.FC<ReferencesProps> = ({ references }) => {
    if (!references || references.length === 0) return null;

    return (
        <Box flexDirection="column" marginY={1}>
            <Box marginBottom={1}>
                <Text bold underline color="yellow">References</Text>
            </Box>

            {references.map((ref, index) => (
                <Box key={index} flexDirection="column" marginBottom={1}>
                    <Box>
                        <Text bold color="green">{ref.name}</Text>
                    </Box>

                    {ref.reference && (
                        <Box>
                            <Text italic>"{ref.reference}"</Text>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}; 