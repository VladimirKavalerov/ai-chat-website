import {
  Container,
  Paper,
  Text,
  TypographyStylesProvider,
  Code,
} from "@mantine/core";
import { useState } from "react";

interface MessageProps {
  title: string;
  text?: string;
  children?: React.ReactNode;
  type: string;
}
export default function Message(props: MessageProps) {
  return (
    <Paper
      shadow="xl"
      p="md"
      radius="md"
      withBorder
      sx={
        props.type === "assistant"
          ? {
              backgroundColor: "#e6f7ff",
              width: "320px",
              marginRight: "auto",
              marginLeft: "5%",
            }
          : props.type === "user"
          ? {
              width: "280px",
              textAlign: "right",
              marginLeft: "auto",
              marginRight: "5%",
            }
          : props.type === "system"
          ? {
              backgroundColor: "#f0f0f0",
              width: "340px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
            }
          : {}
      }
    >
      <Container>
        <Text size="lg" weight={800}>
          {props.title}
        </Text>
        <Text
          size="sm"
          weight={400}
          sx={{
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          <TypographyStylesProvider>
            {props.text !== undefined
              ? highlightTextWithinBackticks(props.text!)
              : ""}
          </TypographyStylesProvider>
        </Text>
        {props.children}
      </Container>
    </Paper>
  );
}

function highlightTextWithinBackticks(input: string): React.ReactNode {
  const regex = /```([^`]*)```/g;
  const output = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(input)) !== null) {
    output.push(input.substring(lastIndex, match.index));
    output.push(<Code block>{match[1]}</Code>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    output.push(input.substring(lastIndex));
  }

  return output;
}
