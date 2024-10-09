// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mWsxNu6bNJUjXxTj6j5WLx

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { MedusaProvider } from "../../medusa/MedusaProvider"; // plasmic-import: Q2oHqpSxoRNy/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  medusaProviderProps?: Partial<
    Omit<React.ComponentProps<typeof MedusaProvider>, "children">
  >;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, medusaProviderProps, antdConfigProviderProps } = props;

  return (
    <MedusaProvider {...medusaProviderProps}>
      <AntdConfigProvider
        {...antdConfigProviderProps}
        borderRadius={
          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius!
            : 6
        }
        colorBgBase={
          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase!
            : "#ffffff"
        }
        colorError={
          antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError!
            : "#ff4d4f"
        }
        colorInfo={
          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo!
            : "#1677ff"
        }
        colorPrimary={
          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary!
            : "#1677ff"
        }
        colorSuccess={
          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess!
            : "#52c41a"
        }
        colorWarning={
          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning!
            : "#faad14"
        }
        controlHeight={
          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight!
            : 32
        }
        defaultDark={
          antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
            ? antdConfigProviderProps.defaultDark!
            : false
        }
        lineWidth={
          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth!
            : 1
        }
        loadingText={
          antdConfigProviderProps && "loadingText" in antdConfigProviderProps
            ? antdConfigProviderProps.loadingText!
            : undefined
        }
        removeLoading={
          antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
            ? antdConfigProviderProps.removeLoading!
            : true
        }
        sizeStep={
          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep!
            : 4
        }
        sizeUnit={
          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit!
            : 4
        }
        themeStyles={
          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles!
            : true
            ? {
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "1.5",
                color: "#333333",
                letterSpacing: "normal"
              }
            : undefined
        }
        wireframe={
          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe!
            : false
        }
      >
        {children}
      </AntdConfigProvider>
    </MedusaProvider>
  );
}
