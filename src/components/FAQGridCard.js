import React from "react"
import { Link } from "gatsby"
import { FAQ_PARENT_SLUG } from "../utils/constants"
import { navigatorShare } from "../utils/navigatorShare"
import { getAbsoluteURL } from "../utils/getAbsoluteURL"
import { copyToClipboard } from "../utils/copyToClipboard"
import {
  Card as MUICard,
  CardContent as MUICardContent,
  Typography as MUITypography,
  Divider as MUIDivider,
  Button as MUIButton,
  Box as MUIBox,
  Tooltip as MUITooltip,
  CardActions as MUICardActions,
  CardHeader as MUICardHeader,
  createStyles,
} from "@mui/material"

import { makeStyles } from "@mui/styles"
import LinkIcon from "@mui/icons-material/Link"

const useStyles = makeStyles(theme =>
  createStyles({
    card: { height: "100%", display: "flex", flexDirection: "column" },
    cardHeader: { paddingTop: 0, paddingBottom: 0, margin: 4 },
    cardContent: { flexGrow: 1 },
  })
)

export default function FAQCard({ faq }) {
  const classes = useStyles()
  const [openTooltip, setOpenTooltip] = React.useState(false)

  const handleTooltipChange = () => {
    toggleToolTip()
  }

  const toggleToolTip = (force = false) => {
    // auto close 1 second after opening
    if (!openTooltip && !force) {
      setTimeout(() => {
        setOpenTooltip(false)
      }, 1000)
    }
    setOpenTooltip(true)
  }

  const handleShareButtonClick = async () => {
    const data = {
      title: faq.frontmatter.question,
      url: getAbsoluteURL(faq.frontmatter.slug, FAQ_PARENT_SLUG),
    }
    // if the devive support a native sharing mechanism use that otherwise copy to clipboard
    try {
      if (navigator.share) {
        await navigatorShare(data)
      } else {
        handleTooltipChange()
        copyToClipboard(data.url)
      }
    } catch (error) {
      console.error(`Failed to share due to the following error: ${error}`)
    }
  }

  return (
    <MUICard raised={true} className={classes.card}>
      <MUICardHeader
        title={faq.frontmatter.question}
        component="h5"
        className={classes.cardHeader}
      ></MUICardHeader>
      <MUIDivider />
      <MUICardContent className={classes.cardContent}>
        <MUITypography
          color="textPrimary"
          component="div"
          dangerouslySetInnerHTML={{ __html: faq.excerpt }}
        />
      </MUICardContent>
      <MUIDivider />
      <MUICardActions>
        <MUIBox>
          <MUITooltip
            title="Copied!"
            aria-label="copied"
            PopperProps={{
              disablePortal: true,
            }}
            open={openTooltip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
          >
            <MUIButton
              variant="contained"
              color="secondary"
              component={Link}
              to="."
              onClick={handleShareButtonClick}
              startIcon={<LinkIcon />}
            >
              Share
            </MUIButton>
          </MUITooltip>
          <MUIButton
            variant="contained"
            color="secondary"
            component={Link}
            to={`${FAQ_PARENT_SLUG}/${faq.frontmatter.slug}`}
            sx={{ ml: 1 }}
          >
            Read More
          </MUIButton>
        </MUIBox>
      </MUICardActions>
    </MUICard>
  )
}
