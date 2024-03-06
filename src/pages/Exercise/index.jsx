import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Input, Heading, Button } from "../../components";

export default function ExercisePage() {
  return (
    <>
      <Helmet>
        <title>Assignment</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full border-black-900 border border-solid bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row justify-start items-start w-full z-[1]">
                <Img src="images/img_rectangle_809.png" alt="image" className="w-[16%] z-[1] object-cover" />
                <header className="flex justify-center items-center w-full ml-[-216px] p-6 bg-gray-900">
                  <div className="flex flex-row justify-between items-center w-[54%] mr-[15px]">
                    <div className="flex flex-row justify-center items-start">
                      <a href="#">
                        <Heading size="md" as="h6" className="!text-lime-50 !font-lato uppercase">
                          Home
                        </Heading>
                      </a>
                      <a href="#" className="mt-[3px] ml-6">
                        <Heading size="md" as="h6" className="!text-lime-50 !font-lato uppercase">
                          Workout plan
                        </Heading>
                      </a>
                      <a href="#" className="ml-[23px]">
                        <Heading size="md" as="h6" className="!text-lime-50 !font-lato uppercase">
                          Ai tracker
                        </Heading>
                      </a>
                      <a href="#" className="ml-[47px]">
                        <Heading size="md" as="h6" className="!text-lime-50 !font-lato uppercase">
                          Exercise
                        </Heading>
                      </a>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[18px]">
                      <a href="#">
                        <Heading size="md" as="h6" className="!text-lime-50 !font-lato uppercase">
                          About
                        </Heading>
                      </a>
                      <Button
                        color="blue_gray_900_02"
                        size="md"
                        leftIcon={<Img src="images/img_octiconperson24.svg" alt="octicon:person-24" />}
                        className="gap-2 font-lato uppercase font-bold min-w-[113px]"
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </header>
              </div>
              <div className="flex flex-row justify-start items-center w-full mt-[-35px] mx-auto max-w-[1315px]">
                <div className="flex flex-row justify-end w-[23%] pb-4 z-[1] bg-white-A700 shadow-xs rounded-[34px]">
                  <div className="flex flex-row justify-start items-start w-[90%] gap-3.5">
                    <Img
                      src="images/img_rectangle_814.png"
                      alt="image_one"
                      className="w-[36px] mt-[15px] object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[82%] gap-1">
                      <div className="flex flex-row justify-between items-start w-full">
                        <Text size="lg" as="p" className="mt-2.5 !text-blue_gray-800_02 !font-medium">
                          100+ new users enrolled
                        </Text>
                        <div className="flex flex-col items-center justify-start w-[6%]">
                          <Img src="images/img_link_svg.svg" alt="linksvg_one" className="h-[10px]" />
                          <div className="h-px w-full mt-[-3px] bg-gray-800" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-start">
                        <Text size="md" as="p" className="!text-blue_gray-300 !font-lato">
                          join now to get 20% instant discount
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_section_image.png"
                  alt="sectionimage"
                  className="w-[95%] ml-[-225px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start mt-[52px] ml-[521px]">
            <a href="#" className="mt-px mb-0.5">
              <Text size="2xl" as="p" className="!text-blue_gray-900 text-center">
                Home
              </Text>
            </a>
            <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[15px] w-[15px] mt-[5px] ml-0.5" />
            <a href="#" className="ml-[15px]">
              <Text size="2xl" as="p" className="!text-blue_gray-900">
                Exercise
              </Text>
            </a>
            <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[15px] w-[15px] mt-1.5 ml-[7px]" />
            <Text size="2xl" as="p" className="mt-[3px] ml-2 !text-blue_gray-900">
              Bicep
            </Text>
            <Img src="images/img_arrow_right.svg" alt="arrowright_five" className="h-[15px] w-[15px] mt-1.5 ml-2.5" />
            <Text size="2xl" as="p" className="mt-0.5 ml-2 !text-blue_gray-900">
              Barbell Bicep Curl
            </Text>
          </div>
          <Heading size="6xl" as="h1" className="mt-[17px] ml-[570px] !text-indigo-900 !font-crimsontext text-center">
            Barbell Bicep Curl
          </Heading>
          <Text size="4xl" as="p" className="w-[52%] mt-px ml-[348px] !text-cyan-900 text-center leading-[26px]">
            The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your
            upper arms, specifically the biceps brachii.
          </Text>
          <div className="h-[400px] w-full mt-[45px] mx-auto relative max-w-[1143px]">
            <div className="flex flex-row justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-row justify-center items-start w-[66%]">
                <Heading size="lg" as="h2" className="mt-3.5 !text-indigo-900_03 z-[1]">
                  Bicep Development
                </Heading>
                <div className="flex flex-row justify-center items-start w-full ml-[-188px]">
                  <Img
                    src="images/img_vector_lime_800.svg"
                    alt="vector_one"
                    className="h-[61px] mt-[42px] opacity-0.4"
                  />
                  <div className="h-[400px] w-[400px] ml-[-6px] bg-indigo-900_d1 rounded-[50%]" />
                </div>
              </div>
              <Img
                src="images/img_indicator_right_svg.svg"
                alt="indicatorright"
                className="h-[84px] mt-[42px] ml-[-22px]"
              />
            </div>
            <Text size="xl" as="p" className="w-[24%] left-0 top-[12%] m-auto !text-blue_gray-900 absolute">
              he barbell bicep curl specifically targets the biceps brachii, contributing to their development and
              definition
            </Text>
            <div className="flex flex-col items-end justify-start w-[71%] h-max right-0 bottom-0 top-0 m-auto absolute">
              <Heading size="lg" as="h3" className="mr-[11px] text-right z-[1]">
                Increased Muscle Engagement
              </Heading>
              <div className="flex flex-row justify-end items-center w-full mt-[-21px]">
                <Img src="images/img_rectangle_810.png" alt="image_two" className="w-[57%] z-[1] object-cover" />
                <Img
                  src="images/img_vector_lime_800_60x382.svg"
                  alt="vector_three"
                  className="h-[60px] ml-[-27px] opacity-0.4"
                />
              </div>
            </div>
            <Text
              size="xl"
              as="p"
              className="w-[26%] right-[1%] top-[15%] m-auto !text-blue_gray-900 text-right absolute"
            >
              By maintaining strict form and controlling the weight, you ensure that the biceps are doing the majority
              of the work, leading to better muscle engagement and growth.
            </Text>
            <div className="flex flex-col items-start justify-start w-[25%] bottom-[19%] left-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start">
                <Heading size="lg" as="h4">
                  Strengthen Building
                </Heading>
                <Img src="images/img_section.svg" alt="section_one" className="h-[31px]" />
              </div>
              <Text size="xl" as="p" className="mt-[-24px] !text-blue_gray-900">
                The exercise allows for heavy resistance, promoting strength gains in the biceps and surrounding muscle
                groups
              </Text>
            </div>
            <Heading size="lg" as="h5" className="w-max right-[1%] bottom-0 top-0 m-auto text-right absolute">
              Compound Movement
            </Heading>
            <Text
              size="xl"
              as="p"
              className="w-[27%] bottom-[15%] right-0 m-auto !text-blue_gray-900 text-right absolute"
            >
              While primarily an isolation exercise for the biceps, the barbell curl involves other muscles to a lesser
              extent, such as the forearms, shoulders, and upper back. This makes it a compound movement that engages
              multiple muscle groups
            </Text>
          </div>
          <Heading size="3xl" as="h2" className="mt-[29px] ml-[338px]">
            About the Exercise
          </Heading>
          <Text size="5xl" as="p" className="w-[53%] mt-[18px] ml-[338px] !text-blue_gray-900 !leading-[27px]">
            The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your
            upper arms, specifically the biceps brachii. Barbell curls into your workout routine can help develop and
            strengthen your biceps, contributing to overall arm strength and aesthetics
          </Text>
          <Heading as="h2" className="mt-[61px] ml-[338px]">
            Target area
          </Heading>
          <Text size="5xl" as="p" className="mt-[3px] ml-[338px] !text-blue_gray-900">
            Biceps brachii and forearm muscles
          </Text>
          <Heading as="h2" className="mt-[22px] ml-[338px]">
            Level for difficulty
          </Heading>
          <Text size="5xl" as="p" className="mt-1 ml-[338px] !text-blue_gray-900">
            Beginner friendly{" "}
          </Text>
          <Heading as="h2" className="mt-[19px] ml-[338px]">
            Number of set
          </Heading>
          <Text size="5xl" as="p" className="mt-[5px] ml-[338px] !text-blue_gray-900">
            3
          </Text>
          <Heading as="h2" className="mt-[21px] ml-[338px]">
            Duration{" "}
          </Heading>
          <Text size="5xl" as="p" className="mt-[5px] ml-[338px] !text-blue_gray-900">
            20 minutes
          </Text>
          <Heading as="h2" className="mt-[21px] ml-[338px]">
            Calories burn
          </Heading>
          <Text size="5xl" as="p" className="mt-[5px] ml-[338px] !text-blue_gray-900">
            150 cal
          </Text>
          <Heading as="h2" className="mt-6 ml-[338px]">
            Equipment needed
          </Heading>
          <Text size="5xl" as="p" className="mt-0.5 ml-[338px] !text-blue_gray-900">
            Barbell
          </Text>
          <Heading as="h2" className="mt-6 ml-[338px]">
            Instruction to perform
          </Heading>
          <Text size="5xl" as="p" className="w-[67%] mt-1 ml-[328px] !text-blue_gray-900 !leading-7">
            Stand up straight with your feet shoulder-width apart.
            <br />
            Hold a barbell with a shoulder-width grip, palms facing forward (an underhand grip).
            <br />
            Your hands should be positioned slightly wider than your shoulders.
            <br />
            Keep your wrists straight and aligned with your forearms.
            <br />
            Maintain a straight back, chest up, and shoulders back.
            <br />
            While keeping your upper arms stationary, exhale and curl the barbell towards your shoulders by flexing your
            elbows.
            <br />
            Focus on contracting your biceps throughout the movement.
            <br />
            Inhale and slowly lower the barbell back to the starting position with controlled movement.
            <br />
            Maintain tension on the biceps during the descent; do not let the weight drop.
            <br />
            Repeat the movement for the desired number of repetitions.
            <br />
            Exhale during the lifting (concentric) phase and inhale during the lowering (eccentric) phase.
          </Text>
          <Heading as="h2" className="mt-6 ml-[337px]">
            Tips{" "}
          </Heading>
          <Text size="5xl" as="p" className="w-[67%] mt-1 ml-[324px] !text-blue_gray-900 !leading-7">
            Avoid using momentum by keeping your body still. Focus on isolating the biceps.
            <br />
            Use a weight that allows you to maintain proper form and control throughout the exercise.
            <br />
            Ensure a full range of motion, allowing your arms to fully extend at the bottom and flex at the top.
          </Text>
          <div className="h-[1752px] w-full mt-[42px] relative">
            <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_rectangle_817.png"
                alt="image_three"
                className="w-[19%] mr-[300px] z-[1] object-cover"
              />
              <div className="flex flex-col items-center justify-start w-full mt-[-437px] gap-[69px]">
                <div className="flex flex-row justify-center w-full pt-[57px] bg-blue_gray-900_05">
                  <div className="flex flex-col items-start justify-start w-full gap-[63px]">
                    <div className="flex flex-col items-start justify-start w-[52%] ml-[78px] gap-[23px]">
                      <Text size="6xl" as="p" className="!text-white-A700">
                        <span className="text-white-A700 font-crimsontext text-[40px] font-bold">
                          Download FitSnap Now
                        </span>
                        <span className="text-white-A700 font-crimsontext font-bold">
                          <br />
                        </span>
                        <span className="text-white-A700 font-crimsontext text-4xl font-semibold">
                          and turn every workout into a visual
                        </span>
                        <span className="text-white-A700 font-crimsontext font-semibold"></span>
                        <span className="text-white-A700 font-crimsontext text-[32px] font-semibold">masterpiece </span>
                      </Text>
                      <div className="flex flex-row justify-between w-[50%]">
                        <Img src="images/img_link_app_store_svg.svg" alt="linkappstore" className="h-[48px]" />
                        <div className="flex flex-row justify-center">
                          <Img src="images/img_google_play_svg.svg" alt="googleplaysvg" className="h-[48px]" />
                        </div>
                      </div>
                    </div>
                    <Img src="images/img_div_shape.png" alt="divshape_one" className="w-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-6 max-w-[1067px]">
                  <Heading size="6xl" as="h2" className="!text-indigo-900_01 !font-crimsontext text-center">
                    Elevate Your Fitness: The AI Workout Plan – Precision, Progression, Perfection
                  </Heading>
                  <Text size="xl" as="p" className="w-[71%] !text-blue_gray-900 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea
                    dictumst. Vivamus eget fermentum augue. Integer congue, libero nec congue fermentum, neque turpis
                    eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt{" "}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[38px] max-w-[1110px]">
                  <Heading size="4xl" as="h3" className="!text-indigo-900_01 !font-crimsontext text-center">
                    Discover the other exercise at FitSnap
                  </Heading>
                  <div className="flex flex-row items-center w-full gap-px">
                    <div className="flex flex-col items-center justify-start w-[31%] mt-1.5">
                      <div className="flex flex-col items-center justify-start w-[73%]">
                        <div className="flex flex-col items-center justify-center w-full p-4 bg-amber-700_42 rounded-[50%]">
                          <Img src="images/img_rectangle_813.png" alt="image" className="w-[95%] object-cover" />
                        </div>
                      </div>
                      <Heading size="lg" as="h4" className="mt-[23px] text-center">
                        Chest press
                      </Heading>
                      <Text size="4xl" as="p" className="mt-1.5 !text-blue_gray-800_01 text-center leading-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea
                        dictumst. Vivamus eget fermentum
                      </Text>
                      <div className="flex flex-row justify-start items-center w-[30%] mt-[11px] gap-1.5">
                        <Text size="xl" as="p" className="ml-0.5 !text-indigo-900_01 text-center">
                          Read More{" "}
                        </Text>
                        <Img
                          src="images/img_arrow_right_indigo_900_01.svg"
                          alt="read_more_one"
                          className="h-[14px] w-[13px]"
                        />
                      </div>
                    </div>
                    <div className="w-[101px] h-px bg-indigo-900_01" />
                    <div className="h-[263px] w-[30%] mt-2 mb-[209px] relative">
                      <div className="h-[250px] w-[75%] right-[3%] top-0 m-auto bg-light_green-A200_60 absolute rounded-[50%]" />
                      <Img
                        src="images/img_rectangle_813_249x331.png"
                        alt="image"
                        className="h-[249px] w-full bottom-0 right-0 left-0 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="w-[101px] h-px bg-indigo-900_01" />
                    <Text
                      size="4xl"
                      as="p"
                      className="w-[31%] mt-[315px] mb-[35px] !text-blue_gray-800_01 text-center leading-[30px]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea
                      dictumst. Vivamus eget fermentum
                    </Text>
                    <div className="w-[101px] h-px bg-indigo-900_01" />
                    <Heading size="lg" as="h5" className="mt-[279px] mb-[171px] text-center">
                      Straight leg deadlift
                    </Heading>
                    <div className="w-[101px] h-px bg-indigo-900_01" />
                    <div className="flex flex-row justify-start items-center w-[10%] mt-[457px] pl-0.5 gap-1.5">
                      <Text size="xl" as="p" className="!text-indigo-900_01 text-center">
                        Read More{" "}
                      </Text>
                      <Img
                        src="images/img_arrow_right_indigo_900_01.svg"
                        alt="arrowright_one"
                        className="h-[14px] w-[13px]"
                      />
                    </div>
                    <div className="w-[101px] h-px bg-indigo-900_01" />
                    <div className="flex flex-col items-start justify-start w-[31%]">
                      <div className="h-[258px] w-[73%] ml-7 relative">
                        <div className="justify-center h-[250px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-light_blue-A200_3f absolute rounded-[50%]" />
                        <Img
                          src="images/img_rectangle_813_214x223.png"
                          alt="image"
                          className="h-[214px] w-[90%] left-0 top-0 m-auto object-cover absolute"
                        />
                      </div>
                      <Heading size="lg" as="h6" className="mt-[19px] ml-[116px] text-center z-[1]">
                        Crunches
                      </Heading>
                      <Text size="4xl" as="p" className="!text-blue_gray-800_01 text-center leading-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea
                        dictumst. Vivamus eget fermentum
                      </Text>
                      <div className="flex flex-row justify-start items-center mt-[21px] ml-32 gap-1.5">
                        <Text size="xl" as="p" className="ml-0.5 !text-indigo-900_01 text-center">
                          Read More{" "}
                        </Text>
                        <Img
                          src="images/img_arrow_right_indigo_900_01.svg"
                          alt="arrowright_one"
                          className="h-[14px] w-[13px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="flex justify-center items-center w-full p-[55px] bg-blue_gray-900_05">
                  <div className="flex flex-row justify-center w-full mb-[57px] mx-auto max-w-[1200px]">
                    <div className="flex flex-row justify-center items-center w-full gap-10">
                      <div className="flex flex-col items-start justify-start w-[68%] mb-[83px] gap-4">
                        <div className="flex flex-row justify-between w-[31%]">
                          <Heading
                            size="s"
                            as="h6"
                            className="mt-px !text-blue_gray-300_01 tracking-[1.70px] !font-crimsontext uppercase"
                          >
                            company
                          </Heading>
                          <Heading
                            size="s"
                            as="h6"
                            className="!text-blue_gray-300_01 tracking-[1.70px] !font-crimsontext uppercase"
                          >
                            help
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-row justify-between items-center w-[40%] mb-1.5">
                            <ul className="flex flex-col items-start justify-start gap-[17px]">
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.25px]">
                                    Our story
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.44px]">
                                    Careers
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.44px]">
                                    Blog
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.44px]">
                                    About
                                  </Text>
                                </a>
                              </li>
                            </ul>
                            <ul className="flex flex-col items-start justify-start gap-[17px]">
                              <li>
                                <a href="#">
                                  <Text size="md" as="p" className="!text-white-A700 tracking-[0.50px]">
                                    FAQ
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.44px]">
                                    Terms & Conditions
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.44px]">
                                    Privacy Policy
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <Text as="p" className="!text-white-A700 tracking-[0.50px] !text-[11.44px]">
                                    Contact Us
                                  </Text>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-row justify-start w-[19%] mt-[58px]">
                            <div className="flex flex-col items-center justify-start w-[88%] gap-2.5">
                              <Heading
                                size="s"
                                as="h6"
                                className="!text-blue_gray-300_01 tracking-[1.70px] !font-crimsontext uppercase"
                              >
                                Social media
                              </Heading>
                              <div className="flex flex-row justify-start w-full gap-[9px]">
                                <Img
                                  src="images/img_clip_path_group.png"
                                  alt="image_four"
                                  className="w-[25px] object-cover"
                                />
                                <Img src="images/img_vector.svg" alt="vector_five" className="h-[25px] w-[25px]" />
                                <Img
                                  src="images/img_vector_white_a700.svg"
                                  alt="vector_seven"
                                  className="h-[25px] w-[25px]"
                                />
                                <Img src="images/img_path_2520.svg" alt="path2520_one" className="h-[25px] w-[25px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[29%] mt-[95px] gap-6">
                        <Heading
                          size="s"
                          as="h6"
                          className="!text-blue_gray-300_01 tracking-[1.70px] !font-crimsontext uppercase"
                        >
                          Stay updated with Us
                        </Heading>
                        <Input
                          color="white_A700"
                          size="sm"
                          shape="square"
                          type="email"
                          name="date"
                          placeholder="Your email address"
                          suffix={
                            <div className="flex justify-center items-center w-[32px] h-[34px] bg-teal-900">
                              <Img src="images/img_arrowright_white_a700.svg" alt="arrow_right" />
                            </div>
                          }
                          className="w-full gap-[35px] tracking-[0.50px] font-inter font-medium"
                        />
                        <Text size="lg" as="p" className="!text-white-A700 tracking-[0.50px]">
                          Copyright © 2023 FitSnap
                        </Text>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <Img
              src="images/img_rectangle_818.png"
              alt="image_five"
              className="h-[483px] w-[19%] right-[3%] top-[2%] m-auto object-cover absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
}
