import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';

type KeyboardControlsProps = {
    onExit: () => void;
};

export const KeyboardControls: React.FC<KeyboardControlsProps> = ({ onExit }) => {
    const [showHelp, setShowHelp] = useState(false);

    useInput((input, key) => {
        if (input === 'q' || key.escape) {
            onExit();
        } else if (input === '?') {
            setShowHelp(!showHelp);
        }
    });

    return (
        <Box flexDirection="column" marginTop={1}>
            <Box justifyContent="center">
                <Text dimColor>Press ? for help or q to exit</Text>
            </Box>

            {showHelp && (
                <Box flexDirection="column" borderStyle="round" marginTop={1} paddingX={2} paddingY={1}>
                    <Text bold>Keyboard Controls:</Text>
                    <Text>q / Esc - Exit application</Text>
                    <Text>? - Toggle help</Text>
                </Box>
            )}
        </Box>
    );
}; 