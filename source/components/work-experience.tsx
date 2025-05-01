import React from 'react';
import { Box, Text } from 'ink';
import type { WorkSchema } from '../resume.schema.js';

type WorkExperienceProps = {
    work: ReturnType<typeof WorkSchema.parse>[] | undefined;
};

export const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
    if (!work || work.length === 0) return null;

    return (
        <Box flexDirection="column" marginY={1}>
            <Box marginBottom={1}>
                <Text bold underline color="yellow">Work Experience</Text>
            </Box>

            {work.map((job, index) => (
                <Box key={index} flexDirection="column" marginBottom={1}>
                    <Box>
                        <Text bold color="green">{job.position}</Text>
                        <Text> at </Text>
                        <Text bold>{job.name}</Text>
                    </Box>

                    {job.url && (
                        <Text dimColor>{job.url}</Text>
                    )}

                    <Box>
                        <Text italic>
                            {job.startDate}
                            {job.endDate ? ` - ${job.endDate}` : ' - Present'}
                            {job.location ? ` | ${job.location}` : ''}
                        </Text>
                    </Box>

                    {job.highlights && job.highlights.length > 0 && (
                        <Box flexDirection="column" marginTop={1}>
                            {job.highlights.map((highlight, i) => (
                                <Box key={i}>
                                    <Text>• </Text>
                                    <Text>{highlight}</Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}; 