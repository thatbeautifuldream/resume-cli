import React, { useEffect, useState } from 'react';
import { Box, Text, useApp } from 'ink';
import { TResumeSchema } from '../resume.schema.js';
import { fetchResumeData } from '../resume.fetcher.js';
import { Header } from './header.js';
import { WorkExperience } from './work-experience.js';
import { Education } from './education.js';
import { Skills } from './skills.js';
import { Projects } from './projects.js';
import { Certificates } from './certificates.js';
import { References } from './references.js';
import { KeyboardControls } from './keyboard-controls.js';


type ResumeProps = {
    showLoading?: boolean;
};

export const Resume: React.FC<ResumeProps> = ({ showLoading = true }) => {
    const { exit } = useApp();
    const [resume, setResume] = useState<TResumeSchema | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadResume = async () => {
            try {
                const data = await fetchResumeData();
                setResume(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load resume data');
                setLoading(false);
            }
        };

        loadResume();
    }, []);

    if (loading && showLoading) {
        return (
            <Box justifyContent="center">
                <Text color="yellow">Loading resume data...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box flexDirection="column">
                <Text color="red">Error loading resume: {error}</Text>
                <Box marginTop={1}>
                    <Text>Press any key to exit</Text>
                </Box>
            </Box>
        );
    }

    if (!resume) {
        return (
            <Box>
                <Text color="red">No resume data found</Text>
            </Box>
        );
    }

    return (
        <Box flexDirection="column" padding={1}>
            <Box marginBottom={1}>
                <Text backgroundColor="green" color="black" bold> RESUME CLI </Text>
            </Box>

            <Header basics={resume.basics} />
            <WorkExperience work={resume.work} />
            <Education education={resume.education} />
            <Skills skills={resume.skills} />
            <Projects projects={resume.projects} />
            <Certificates certificates={resume.certificates} />
            <References references={resume.references} />

            <KeyboardControls onExit={exit} />
        </Box>
    );
}; 