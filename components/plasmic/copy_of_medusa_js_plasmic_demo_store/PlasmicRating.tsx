// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mWsxNu6bNJUjXxTj6j5WLx
// Component: DV8y-gw72zdg

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: mWsxNu6bNJUjXxTj6j5WLx/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: DV8y-gw72zdg/css

import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: ZU8jZTdr-O2E/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: Z4zEZqBXtZoi/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: V8xSRsREiipR/icon

createPlasmicElementProxy;

export type PlasmicRating__VariantMembers = {
  rating:
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf";
};
export type PlasmicRating__VariantsArgs = {
  rating?: SingleChoiceArg<
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf"
  >;
};
type VariantPropType = keyof PlasmicRating__VariantsArgs;
export const PlasmicRating__VariantProps = new Array<VariantPropType>("rating");

export type PlasmicRating__ArgsType = {};
type ArgPropType = keyof PlasmicRating__ArgsType;
export const PlasmicRating__ArgProps = new Array<ArgPropType>();

export type PlasmicRating__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultRatingProps {
  rating?: SingleChoiceArg<
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "half"
    | "oneHalf"
    | "twoHalf"
    | "threeHalf"
    | "fourHalf"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRating__RenderFunc(props: {
  variants: PlasmicRating__VariantsArgs;
  args: PlasmicRating__ArgsType;
  overrides: PlasmicRating__OverridesType;
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
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
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
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__lCnjw, {
          [sty.svgrating_five__lCnjwPj562]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__lCnjwNeh8S]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__lCnjw3Vz0J]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_half__lCnjwjaIxB]: hasVariant(
            $state,
            "rating",
            "half"
          ),
          [sty.svgrating_oneHalf__lCnjwpdPJx]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_one__lCnjwaAjgz]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf__lCnjw6Kx9]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__lCnjwgUyCg]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__lCnjwCBfiY]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__lCnjwSye3W]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__lFjG5, {
          [sty.svgrating_five__lFjG5Pj562]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__lFjG5Neh8S]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__lFjG53Vz0J]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_oneHalf__lFjG5PdPJx]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_threeHalf__lFjG56Kx9]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__lFjG5GUyCg]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__lFjG5CBfiY]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__lFjG5Sye3W]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__qrvxE, {
          [sty.svgrating_five__qrvxEpj562]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__qrvxEneh8S]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__qrvxE3Vz0J]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__qrvxE6Kx9]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__qrvxEgUyCg]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__qrvxEcBfiY]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__ccgQa, {
          [sty.svgrating_five__ccgQapj562]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__ccgQaneh8S]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__ccgQa3Vz0J]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__ccgQa6Kx9]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__hqarZ, {
          [sty.svgrating_five__hqarZpj562]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__hqarZneh8S]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRating__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRating__VariantsArgs;
    args?: PlasmicRating__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRating__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRating__ArgsType,
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
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
