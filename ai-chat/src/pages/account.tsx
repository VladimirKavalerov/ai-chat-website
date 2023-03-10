import { Button, Stack, Text } from "@mantine/core";
import { useRouter } from "next/router";
import AiAppLayout from "@/components/AiAppLayout";
import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Account() {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  console.log(user);
  return (
    <AiAppLayout title="Account">
      <Stack
        justify="center"
        spacing="xl"
        align="center"
        sx={{
          height: "100%",
        }}
      >
        <Text size="xl" weight={500}>
          Your email: {user?.email}
        </Text>
        <Button
          size="lg"
          sx={{
            width: "250px",
            height: "50px",
          }}
          color="cyan"
          radius="md"
          onClick={() => {
            supabaseClient.auth.signOut();
            router.push("/");
          }}
        >
          Logout
        </Button>
      </Stack>
    </AiAppLayout>
  );
}
