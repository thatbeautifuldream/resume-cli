import React from 'react';
import { Box, Text } from 'ink';
import type { ProjectSchema } from '../resume.schema.js';

type ProjectsProps = {
    projects: ReturnType<typeof ProjectSchema.parse>[] | undefined;
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <Box flexDirection="column" marginY={1}>
            <Box marginBottom={1}>
                <Text bold underline color="yellow">Projects</Text>
            </Box>

            {projects.map((project, index) => (
                <Box key={index} flexDirection="column" marginBottom={1}>
                    <Box>
                        <Text bold color="green">{project.name}</Text>
                    </Box>

                    {project.url && (
                        <Text dimColor>{project.url}</Text>
                    )}

                    {project.description && (
                        <Box marginTop={1}>
                            <Text>{project.description}</Text>
                        </Box>
                    )}

                    {project.startDate && (
                        <Box>
                            <Text italic>
                                {project.startDate}
                                {project.endDate ? ` - ${project.endDate}` : ' - Present'}
                            </Text>
                        </Box>
                    )}

                    {project.highlights && project.highlights.length > 0 && (
                        <Box flexDirection="column" marginTop={1}>
                            {project.highlights.map((highlight, i) => (
                                <Box key={i}>
                                    <Text>• </Text>
                                    <Text>{highlight}</Text>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {project.keywords && project.keywords.length > 0 && (
                        <Box flexWrap="wrap" marginTop={1}>
                            {project.keywords.map((keyword, i) => (
                                <Box key={i} marginRight={1} marginTop={1}>
                                    <Text backgroundColor="magenta" color="white"> {keyword} </Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}; 