"use client";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";

import { IconSun, IconMoon } from "@tabler/icons-react";

import styles from "./ToggleColorScheme.module.css";

export default function ToggleColorScheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={`${styles.icon} ${styles.light}`} stroke={1.5} />
      <IconMoon className={`${styles.icon} ${styles.dark}`} stroke={1.5} />
    </ActionIcon>
  );
}
