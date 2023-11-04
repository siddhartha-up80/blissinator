"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MessagesProvider } from "@/context/messages";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const queryClient = new QueryClient();

  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <QueryClientProvider client={queryClient}>
          <MessagesProvider>{children}</MessagesProvider>
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}