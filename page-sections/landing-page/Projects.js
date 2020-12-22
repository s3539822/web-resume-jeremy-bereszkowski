import React from 'react'
import PropTypes from "prop-types"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

import BlockButton from "components/Buttons/BlockButton";
import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import useIsTouchDevice from "util/device-detect";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({}))

export default function Projects(props) {
    const {header, subHeader, cards} = props
    const classes = useStyles()

    const animate = useIsTouchDevice()

    return (
        <HeaderSubHeaderBody
            header={header}
            subHeader={subHeader}
            headerColor={"light"}
        >
            <VerticalTimeline animate={!animate}>
                {
                    cards.map((ele, key) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2020"
                                iconStyle={{ background: grayColor[3], color: '#fff' }}
                                icon={<StarIcon />}
                                key={key}
                            >
                                <Grid
                                    container
                                    direction={"column"}
                                    justify={"center"}
                                    alignItems={"flex-start"}
                                >
                                    <Grid item>
                                        <h3 className="vertical-timeline-element-title">
                                            {ele.title}
                                        </h3>
                                    </Grid>
                                    <Grid item>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {ele.subTitle}
                                        </h4>
                                    </Grid>
                                    <Grid item>
                                        <p>
                                            {ele.para}
                                        </p>
                                    </Grid>
                                    <Grid item>
                                        <br/>
                                    </Grid>
                                    <Grid item>
                                        <Grid
                                            container
                                            direction={"row"}
                                            justify={"flex-end"}
                                            alignItems={"center"}
                                        >
                                            <Grid item>
                                                <BlockButton color={"green"} href={ele.href1}>
                                                    {ele.text1}
                                                </BlockButton>
                                            </Grid>
                                            <Grid item>
                                                <BlockButton color={"green"} href={ele.href2}>
                                                    {ele.text2}
                                                </BlockButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}

Projects.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}
