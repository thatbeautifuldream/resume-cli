import React from 'react';
import { Box, Text } from 'ink';
import type { SkillSchema } from '../resume.schema.js';

type SkillsProps = {
    skills: ReturnType<typeof SkillSchema.parse>[] | undefined;
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    if (!skills || skills.length === 0) return null;

    return (
        <Box flexDirection="column" marginY={1}>
            <Box marginBottom={1}>
                <Text bold underline color="yellow">Skills</Text>
            </Box>

            {skills.map((skill, index) => (
                <Box key={index} flexDirection="column" marginBottom={1}>
                    <Box>
                        <Text bold>{skill.name}</Text>
                        {skill.level && (
                            <Text> ({skill.level})</Text>
                        )}
                    </Box>

                    {skill.keywords && skill.keywords.length > 0 && (
                        <Box flexWrap="wrap">
                            {skill.keywords.map((keyword, i) => (
                                <Box key={i} marginRight={1} marginTop={1}>
                                    <Text backgroundColor="blue" color="white"> {keyword} </Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}; 