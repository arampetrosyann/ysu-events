import { Box, Typography } from "@material-ui/core";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import {
  ImageCard,
  BackgroundVideo,
  Banner,
  Post,
  Loader,
} from "../../components";
import useHome from "../../talons/useHome";
import bannerImg from "../../assets/images/ysu-banner-pic.png";
import video from "../../assets/students.mp4";

export default function Home() {
  const { events } = useHome();

  return (
    <>
      {events ? (
        <>
          <BackgroundVideo
            src={video}
            autoPlay
            loop
            muted
            itemPosition="middleCenter"
            className={styles.backgroundVideo}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                component="h2"
                variant="h3"
                style={{ color: "#ffffff" }}
              >
                Միացիր Մեզ
              </Typography>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  marginTop: "6px",
                  backgroundColor: "#b26703",
                }}
              ></div>
            </Box>
          </BackgroundVideo>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="46px 12px"
          >
            {events.map((data) => {
              return <Post key={data.id} data={data} />;
            })}
          </Box>
          <Box
            marginBottom="46px"
            textAlign="center"
            color="#000000d0"
            fontSize={24}
            fontWeight={700}
          >
            <Link to="/events" style={{ color: "inherit" }}>
              <span>Իմանալ ավելին</span>
            </Link>
          </Box>
          <Box
            component="section"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            className={styles.imageCards}
          >
            <ImageCard
              src="https://i.ibb.co/n18Wdgn/img-1.jpg"
              alt="Students Image"
            />
            <ImageCard
              src="https://i.ibb.co/tbNkfKh/img-2.jpg"
              alt="Students Image"
            />
            <ImageCard
              src="https://i.ibb.co/s5nyBFV/img-3.jpg"
              alt="Students Image"
            />
          </Box>
          <Banner src={bannerImg} height={306}>
            <Box
              display="flex"
              height="100%"
              justifyContent="center"
              alignItems="center"
              color="#ffffff"
              fontSize={32}
            >
              <a
                href="http://www.ysu.am/main/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <pre>
                  Երևանի{"\n"}Պետական{"\n"}Համալսարան
                </pre>
                <div
                  style={{
                    height: "2px",
                    marginTop: "6px",
                    backgroundColor: "#b26703",
                  }}
                ></div>
              </a>
            </Box>
          </Banner>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
