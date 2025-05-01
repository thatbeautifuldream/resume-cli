import React from 'react';
import { Box, Text } from 'ink';
import type { EducationSchema } from '../resume.schema.js';

type EducationProps = {
    education: ReturnType<typeof EducationSchema.parse>[] | undefined;
};

export const Education: React.FC<EducationProps> = ({ education }) => {
    if (!education || education.length === 0) return null;

    return (
        <Box flexDirection="column" marginY={1}>
            <Box marginBottom={1}>
                <Text bold underline color="yellow">Education</Text>
            </Box>

            {education.map((edu, index) => (
                <Box key={index} flexDirection="column" marginBottom={1}>
                    <Box>
                        <Text bold>{edu.institution}</Text>
                    </Box>

                    <Box>
                        <Text italic>{edu.studyType}{edu.area ? `, ${edu.area}` : ''}</Text>
                    </Box>

                    <Box>
                        <Text>
                            {edu.startDate}
                            {edu.endDate ? ` - ${edu.endDate}` : ' - Present'}
                        </Text>
                    </Box>

                    {edu.url && (
                        <Text dimColor>{edu.url}</Text>
                    )}

                    {edu.score && (
                        <Text>Score: {edu.score}</Text>
                    )}

                    {edu.courses && edu.courses.length > 0 && (
                        <Box flexDirection="column" marginTop={1}>
                            <Text bold>Courses:</Text>
                            {edu.courses.map((course, i) => (
                                <Box key={i}>
                                    <Text>• </Text>
                                    <Text>{course}</Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}; 