// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mWsxNu6bNJUjXxTj6j5WLx
// Component: Ddzk5l-7sQtW

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: mWsxNu6bNJUjXxTj6j5WLx/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: Ddzk5l-7sQtW/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: tLfoPFexMQ-Z/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  iconOnly: "iconOnly";
  colors:
    | "gray"
    | "white"
    | "blue"
    | "black"
    | "lightGray"
    | "lightGrayOutline"
    | "link";
  size: "large" | "small" | "narrow";
  rounded: "rounded";
  states: "active";
  isDisabled: "isDisabled";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  colors?: SingleChoiceArg<
    | "gray"
    | "white"
    | "blue"
    | "black"
    | "lightGray"
    | "lightGrayOutline"
    | "link"
  >;
  size?: SingleChoiceArg<"large" | "small" | "narrow">;
  rounded?: SingleBooleanChoiceArg<"rounded">;
  states?: SingleChoiceArg<"active">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "iconOnly",
  "colors",
  "size",
  "rounded",
  "states",
  "isDisabled"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

export type PlasmicButton__OverridesType = {
  root?: Flex__<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  colors?: SingleChoiceArg<
    | "gray"
    | "white"
    | "blue"
    | "black"
    | "lightGray"
    | "lightGrayOutline"
    | "link"
  >;
  size?: SingleChoiceArg<"large" | "small" | "narrow">;
  rounded?: SingleBooleanChoiceArg<"rounded">;
  states?: SingleChoiceArg<"active">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "colors",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.colors
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "rounded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rounded
      },
      {
        path: "states",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.states
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolors_black]: hasVariant($state, "colors", "black"),
          [sty.rootcolors_blue]: hasVariant($state, "colors", "blue"),
          [sty.rootcolors_gray]: hasVariant($state, "colors", "gray"),
          [sty.rootcolors_lightGrayOutline]: hasVariant(
            $state,
            "colors",
            "lightGrayOutline"
          ),
          [sty.rootcolors_lightGray]: hasVariant($state, "colors", "lightGray"),
          [sty.rootcolors_link]: hasVariant($state, "colors", "link"),
          [sty.rootcolors_white]: hasVariant($state, "colors", "white"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootrounded]: hasVariant($state, "rounded", "rounded"),
          [sty.rootrounded_showEndIcon_size_large_colors_black]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "colors", "black") &&
            hasVariant($state, "size", "large") &&
            hasVariant($state, "rounded", "rounded"),
          [sty.rootrounded_size_large]:
            hasVariant($state, "rounded", "rounded") &&
            hasVariant($state, "size", "large"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_colors_black]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "colors", "black"),
          [sty.rootshowEndIcon_size_large_colors_black]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "colors", "black") &&
            hasVariant($state, "size", "large"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.rootsize_narrow]: hasVariant($state, "size", "narrow"),
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.rootstates_active]: hasVariant($state, "states", "active")
        }
      )}
    >
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "showEndIcon", "showEndIcon")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__vD2Z, {
            [sty.freeBoxiconOnly__vD2ZF9Rv]: hasVariant(
              $state,
              "iconOnly",
              "iconOnly"
            ),
            [sty.freeBoxshowEndIcon__vD2ZIrhM]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBoxshowStartIcon__vD2Z8Hk0]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.freeBoxsize_large__vD2Zl1JMa]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.freeBoxsize_small__vD2ZaBbUj]: hasVariant(
              $state,
              "size",
              "small"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <MenuIcon
                className={classNames(projectcss.all, sty.svg___6CiIf)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolors_black]: hasVariant(
                $state,
                "colors",
                "black"
              ),
              [sty.slotTargetStartIconcolors_blue]: hasVariant(
                $state,
                "colors",
                "blue"
              ),
              [sty.slotTargetStartIconcolors_gray]: hasVariant(
                $state,
                "colors",
                "gray"
              ),
              [sty.slotTargetStartIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetStartIconsize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.slotTargetStartIconsize_small]: hasVariant(
                $state,
                "size",
                "small"
              )
            })
          })}
        </div>
      ) : null}
      {renderPlasmicSlot({
        defaultContents: "Enter some text",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrencolors_black]: hasVariant(
            $state,
            "colors",
            "black"
          ),
          [sty.slotTargetChildrencolors_blue]: hasVariant(
            $state,
            "colors",
            "blue"
          ),
          [sty.slotTargetChildrencolors_gray]: hasVariant(
            $state,
            "colors",
            "gray"
          ),
          [sty.slotTargetChildrencolors_link]: hasVariant(
            $state,
            "colors",
            "link"
          ),
          [sty.slotTargetChildreniconOnly]: hasVariant(
            $state,
            "iconOnly",
            "iconOnly"
          ),
          [sty.slotTargetChildrenisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.slotTargetChildrenrounded]: hasVariant(
            $state,
            "rounded",
            "rounded"
          ),
          [sty.slotTargetChildrenrounded_size_large]:
            hasVariant($state, "size", "large") &&
            hasVariant($state, "rounded", "rounded"),
          [sty.slotTargetChildrenshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.slotTargetChildrensize_large]: hasVariant(
            $state,
            "size",
            "large"
          ),
          [sty.slotTargetChildrensize_small]: hasVariant(
            $state,
            "size",
            "small"
          )
        })
      })}
      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__fWbQ, {
            [sty.freeBoxshowEndIcon__fWbQIrhM]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBoxsize_small__fWbQaBbUj]: hasVariant(
              $state,
              "size",
              "small"
            )
          })}
        >
          {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false)
            ? renderPlasmicSlot({
                defaultContents: (
                  <MenuIcon
                    className={classNames(projectcss.all, sty.svg__s9LaY)}
                    role={"img"}
                  />
                ),

                value: args.endIcon,
                className: classNames(sty.slotTargetEndIcon, {
                  [sty.slotTargetEndIconcolors_black]: hasVariant(
                    $state,
                    "colors",
                    "black"
                  ),
                  [sty.slotTargetEndIconcolors_link]: hasVariant(
                    $state,
                    "colors",
                    "link"
                  ),
                  [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                    $state,
                    "showEndIcon",
                    "showEndIcon"
                  )
                })
              })
            : null}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
