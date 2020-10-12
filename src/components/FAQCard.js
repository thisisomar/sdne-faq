import React from "react"
import {
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles,
  createStyles,
  Button,
  Box,
  Tooltip,
} from "@material-ui/core"

import { Link } from "gatsby"
import LinkIcon from "@material-ui/icons/Link"

import { copyToClipboard } from "../utils/CopyToClipboard"

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      marginBottom: 7,
      fontWeight: 700,
      fontFamily: "Poppins, sans-serif",
      color: "#ffffff",

      [theme.breakpoints.down("xl")]: {
        fontSize: "3em",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.5em",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2.2em",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.9em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.6em",
      },
    },
    size: {
      width: "100%",
      backgroundColor: theme.palette.primary.dark,

      [theme.breakpoints.down("xl")]: {
        maxWidth: 1200,
        padding: "25px 35px",
      },
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        padding: "20px",
      },
    },
    body: {
      lineHeight: 1.75,
      color: "#ffffff",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 300,

      "& p, li": {
        [theme.breakpoints.down("xl")]: {
          margin: "10px 0px 0px 0px",
          fontSize: "1.5em",
        },
        [theme.breakpoints.down("lg")]: {
          ontSize: "1.4em",
        },
        [theme.breakpoints.down("md")]: {
          ontSize: "1.25em",
        },
        [theme.breakpoints.down("sm")]: {
          ontSize: "1.15em",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.1em",
        },
      },

      "& ul": {
        paddingLeft: 22,
        margin: 0,
      },

      "& a": {
        color: theme.palette.secondary.main,
        textDecoration: "none",
      },
    },
    controlBox: {
      marginTop: 15,
    },
    cardContent: {
      padding: 0,

      "&:last-child": {
        padding: 0,
      },
    },
  })
)

export default function ({ faq }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  return (
    <Card className={classes.size}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="h3">
          {faq.frontmatter.question}
        </Typography>

        <Divider />

        <Typography
          className={classes.body}
          color="textPrimary"
          component="div"
          dangerouslySetInnerHTML={{ __html: faq.html }}
        />

        <Box className={classes.controlBox}>
          <Tooltip
            title="Copied!"
            aria-label="copied"
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
          >
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              className={classes.button}
              to="."
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: faq.frontmatter.question,
                      url:
                        window.location.href +
                        (window.location.href.indexOf(faq.frontmatter.slug) ===
                        -1
                          ? faq.frontmatter.slug
                          : ""),
                    })
                    .catch(console.error)
                } else {
                  handleTooltipOpen()
                  copyToClipboard(
                    window.location.href +
                      (window.location.href.indexOf(faq.frontmatter.slug) === -1
                        ? faq.frontmatter.slug
                        : "")
                  )
                }
              }}
              startIcon={<LinkIcon />}
            >
              Share
            </Button>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  )
}
