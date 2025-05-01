import React from 'react';
import { Box, Text } from 'ink';
import type { BasicsSchema } from '../resume.schema.js';

type HeaderProps = {
    basics: ReturnType<typeof BasicsSchema.parse> | undefined;
};

export const Header: React.FC<HeaderProps> = ({ basics }) => {
    if (!basics) return null;

    return (
        <Box flexDirection="column" marginBottom={1}>
            <Box>
                <Text bold color="green">{basics.name}</Text>
            </Box>

            {basics.label && (
                <Box marginTop={1}>
                    <Text italic color="blue">{basics.label}</Text>
                </Box>
            )}

            <Box marginTop={1} flexDirection="column">
                {basics.email && (
                    <Text>Email: <Text color="cyan">{basics.email}</Text></Text>
                )}
                {basics.phone && (
                    <Text>Phone: <Text color="cyan">{basics.phone}</Text></Text>
                )}
                {basics.url && (
                    <Text>Website: <Text color="cyan">{basics.url}</Text></Text>
                )}
            </Box>

            {basics.location && (
                <Box marginTop={1} flexDirection="column">
                    <Text bold>Location:</Text>
                    {basics.location.address && <Text>{basics.location.address}</Text>}
                    <Text>
                        {basics.location.city && `${basics.location.city}, `}
                        {basics.location.region && `${basics.location.region}, `}
                        {basics.location.countryCode && basics.location.countryCode}
                    </Text>
                </Box>
            )}

            {basics.profiles && basics.profiles.length > 0 && (
                <Box marginTop={1} flexDirection="column">
                    <Text bold>Profiles:</Text>
                    {basics.profiles.map((profile, index) => (
                        <Text key={index}>
                            {profile.network}: <Text color="cyan">{profile.url}</Text>
                        </Text>
                    ))}
                </Box>
            )}
        </Box>
    );
}; 