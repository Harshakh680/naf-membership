import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import React from "react";
import { useTranslation } from "react-i18next";

import Award1 from "../../../assets/About/Awards/Award1.jpg";
import Award2 from "../../../assets/About/Awards/Award2.jpg";
import Award3 from "../../../assets/About/Awards/Award3.jpg";
import Award4 from "../../../assets/About/Awards/Award4.jpg";
import Award5 from "../../../assets/About/Awards/Award5.jpg";
//import Award6 from "../../../assets/About/Awards/Award6.png";
//import Award7 from "../../../assets/About/Awards/Award7.png";
//import Award8 from "../../../assets/About/Awards/Award8.png";

import ArrowButton from "../../../Componenets/CommonComponents/ArrowButton";

const AwardCard = ({ isFirst, title, image, link,bgColor }) => {

    {/* const isYouTube =
        link &&
        (link.includes("youtube.com") || link.includes("youtu.be"));

    const getEmbedUrl = (url) => {
        if (!url) return null;

        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }

        if (url.includes("youtu.be")) {
            return url.replace("youtu.be/", "youtube.com/embed/");
        }

        // If already embed URL
        return url;
    }; */}

    //const embedUrl = isYouTube ? getEmbedUrl(link) : null;

    const wrapperStyles = {
        width: { xs: "300px", sm: "350px", md: "450px" },
        height: { xs: "200px", sm: "250px", md: "400px" },
        borderRadius: 2,
        mb: 1,
        overflow: "hidden",
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "300px", sm: "350px", md: "550px" },
                pl: isFirst ? { xs: "15px", sm: "20px", md: "40px" } : 0,
            }}
        >
           {/*{isYouTube ? (
                <Box sx={wrapperStyles}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            ) : */} <Box
        sx={{
            ...wrapperStyles,
            backgroundColor: bgColor || "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 2, sm: 3, md: 4 },
        }}
    >
        <Box
            component="img"
            src={image}
            alt={title}
            sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
            }}
        />
    </Box>


            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                <Typography variant="body2" color="#FCFCFC" className="bodyMediumText1">
                    {title}
                </Typography>

                {/* Show Arrow only when link exists AND not a YouTube embed */}
                {/*{link && !isYouTube && (
                    <Box onClick={() => window.open(link, "_blank")}>
                        <ArrowButton colorBg="#262626" />
                    </Box>
                )} */}
            </Box>
        </Box>
    );
};

const AwardsSection = () => {
    const { t } = useTranslation();

    const awardsData = [
  {
    title: t("about.awards.award1.title"),
    image: Award1,
    bgColor: "#FBD63D",
  },
  {
    title: t("about.awards.award2.title"),
    image: Award2,

    bgColor: "#158BA9",
  },
  {
    title: t("about.awards.award3.title"),
    image: Award3,

    bgColor: "#E5F39E",
  },
  {
    title: t("about.awards.award4.title"),
    image: Award4,
    
    bgColor: "#FFA0A6",
  },
  {
    title: t("about.awards.award5.title"),
    image: Award5,
    bgColor: "#9BE3C2",
  },
  /*
  {
    title: t("about.awards.award6.title"),
    image: Award6,
    bgColor: "#EAEAEA",
  },
  {
    title: t("about.awards.award7.title"),
    image: Award7,
    bgColor: "#C6E4FF",
  },
  {
    title: t("about.awards.award8.title"),
    image: Award8,
  
    bgColor: "#FFE8B0",
  },
  */
];


    return (
        <Box className="section-container" sx={{ px: 0 }}>
            <Typography
                variant="h2"
                color="#FCFCFC"
                className="headings-h2"
                sx={{
                    width: { xs: "90%", sm: "90%", md: "50%" },
                    px: { xs: "15px", sm: "20px", md: "50px" },
                }}
                mb={4}
            >
                {t("about.AwardsRecognitions")}
            </Typography>

            <Box sx={{ overflow: "hidden", position: "relative" }}>
                <Swiper
                    modules={[FreeMode]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    freeMode
                    style={{ padding: "0 16px" }}
                >
                    {awardsData.map((award, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }}>
                            <AwardCard
                                isFirst={index === 0}
                                title={award.title}
                                image={award.image}
                                bgColor={award.bgColor}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default AwardsSection;
