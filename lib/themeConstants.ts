import { makeStyles } from "@material-ui/core";

export const THEME = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export const useShadowGlowStyle = makeStyles({
  shadowGlow: {
    animation: `$animatedShadow 10s infinite ease-out alternate`,
  },
      "@keyframes animatedShadow": {
      "0%": {
        boxShadow: "0 3px 5px 2px #f79533"
      },
      "15%": {
        boxShadow: "0 3px 5px 2px #f37055"
      },
      "30%": {
        boxShadow: "0 3px 5px 2px #ef4e7b"
      },
      "45%": {
        boxShadow: "0 3px 5px 2px #a166ab"
      },
      "60%": {
        boxShadow: "0 3px 5px 2px #5073b8"
      },
      "75%": {
        boxShadow: "0 3px 5px 2px #1098ad"
      },
      "90%": {
        boxShadow: "0 3px 5px 2px #1098ad"
      },
      "100%": {
        boxShadow: "0 3px 5px 2px #6fba82"
      },
    },
});