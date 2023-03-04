import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Center,
  Footer,
  Burger,
  Group,
} from "@mantine/core";
import Head from "next/head";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";

interface AiAppLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function AiAppLayout(props: AiAppLayoutProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const today = new Date();
  return (
    <>
      <Head>
        <title>{props.title || "AI Playground"}</title>
      </Head>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        }
        footer={
          <Footer height={60} p="md">
            <Center>
              <Text>Vladimir Kavalerov, {today.getFullYear()} &copy;</Text>
            </Center>
          </Footer>
        }
        header={
          <Header height={60}>
            <Group sx={{ height: "100%" }} px={16}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text size="xl">AI Playground</Text>
              <Text
                size="xl"
                sx={{
                  marginLeft: "auto",
                  marginRight: "40%",
                }}
              >
                {props.title}
              </Text>
            </Group>
          </Header>
        }
      >
        {props.children}
      </AppShell>
    </>
  );
}
