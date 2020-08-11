import React from "react";
import cx from "clsx";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";

const usePersonStyles = makeStyles(() => ({
    text: {
        fontFamily: "Barlow, san-serif",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        // overflow: "hidden"
    },
    name: {
        fontWeight: 600,
        fontSize: "1.5rem",
        color: "white"
    },
    caption: {
        fontSize: "0.8rem",
        color: "white",
        marginTop: -4
    }
}));

const PersonItem = ({ src, name, email }) => {
    const avatarStyles = useDynamicAvatarStyles({ size: 40 });
    const styles = usePersonStyles();
    return (
        <Row gap={2} p={2.5}>
            <Item>
                <Avatar classes={avatarStyles} src={src} />
            </Item>
            <Row wrap grow gap={0.5} minWidth={0}>
                <Item grow minWidth={0} position={"middle"}>
                    <div className={cx(styles.name, styles.text)}>{name}</div>
                    <div className={cx(styles.caption, styles.text)}>{email}</div>
                </Item>
            </Row>
        </Row>
    );
};

const useStyles = makeStyles(() => ({
    card: {
        width: "100%",
        borderRadius: 16,
        boxShadow: "0 8px 16px 0 #BDC9D7",
        overflow: "hidden",
        backgroundColor: 'red',

    },
    header: {
        fontFamily: "Barlow, san-serif",
        backgroundColor: "#fff"
    },
    actions: {
        color: "#BDC9D7"
    },
    divider: {
        backgroundColor: "red",
        margin: "0 20px"
    }
}));

const Card = React.memo(function Card() {
    const styles = useStyles();
    return (
        <>
            <NoSsr>
                <GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 600] }]} />
            </NoSsr>
            <Column p={0} gap={0} className={styles.card}>
                <PersonItem
                    name="Shivam Jha"
                    email="shivamjjha@gmail.com"
                    src={
                        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    }
                />
                <Divider variant={"middle"} className={styles.divider} />
            </Column>
        </>
    );
});

export default Card;