import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Input, Button, SelectBox } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardDesignPage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Assignment</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full border-black-900 border border-solid bg-gray-100">
        <div className="flex flex-row justify-center items-start w-full">
          <Sidebar
            width="347px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="h-screen top-0 bg-white-A700 !sticky overflow-auto"
          >
            <Menu
              menuItemStyles={{
                button: {
                  padding: "16px",
                  color: "#737b7b",
                  fontWeight: 500,
                  fontSize: "18px",
                  gap: "28px",
                  borderRadius: "16px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    fontWeight: "600 !important",
                    backgroundColor: "#5d5fef !important",
                    boxShadow: "0px 20px  50px 0px #37455719",
                  },
                },
              }}
              className="flex flex-col items-center justify-start w-full mt-[148px] mb-[597px] gap-[44.27px] px-[46px]"
            >
              <MenuItem icon={<Img src="images/img_graph_1.svg" alt="graphone_one" className="h-[32px] w-[32px]" />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<Img src="images/img_group.svg" alt="image" className="h-[37px]" />}>
                Leaderboard
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_vector_gray_600.svg" alt="vector_one" className="h-[33px] w-[33px]" />}
              >
                Track Progress
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_vector_gray_600_45x37.svg" alt="vector_three" className="h-[37px]" />}
              >
                Exercise Progression
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="images/img_vector_gray_600_33x34.svg" alt="vector_five" className="h-[34px] w-[34px]" />
                }
              >
                Activity Log
              </MenuItem>
            </Menu>
          </Sidebar>
          <div className="flex flex-col items-center justify-start w-[83%] gap-7">
            <header className="flex justify-center items-center w-full p-[30px] bg-white-A700">
              <div className="flex flex-row justify-between items-center w-[96%] ml-[25px]">
                <Heading size="5xl" as="h1" className="!text-blue_gray-900_01">
                  Dashboard
                </Heading>
                <div className="flex flex-row justify-between w-[74%]">
                  <div className="flex flex-row justify-between w-[66%]">
                    <Input
                      color="gray_50_02"
                      size="md"
                      name="search"
                      placeholder="Search here..."
                      value={searchBarValue4}
                      onChange={(e) => setSearchBarValue4(e)}
                      prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                      suffix={
                        searchBarValue4?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue4("")}
                            height={32}
                            width={32}
                            fillColor="#5d5fefff"
                          />
                        ) : null
                      }
                      className="w-[74%] gap-2 text-blue_gray-500 rounded-[16px]"
                    />
                    <div className="flex flex-row justify-start items-center w-[21%] gap-4 p-3.5">
                      <Img
                        src="images/img_twemoji_flag_india.svg"
                        alt="twemojiflag_one"
                        className="h-[25px] w-[25px]"
                      />
                      <SelectBox
                        indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                        name="ind"
                        placeholder="IND"
                        options={dropDownOptions}
                        className="w-[64%] mt-0.5 gap-px text-blue_gray-800 font-semibold"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[26%] gap-6">
                    <Button size="lg" shape="square" className="w-[48px]">
                      <Img src="images/img_notifications.svg" />
                    </Button>
                    <div className="flex flex-row justify-start items-center w-[74%] gap-5">
                      <Img
                        src="images/img_rectangle_1393.png"
                        alt="image_one"
                        className="w-[60px] object-cover rounded-[16px]"
                      />
                      <SelectBox
                        size="sm"
                        indicator={<Img src="images/img_group_21861.svg" alt="Group 21861" />}
                        name="admin"
                        placeholder="Lorem"
                        options={dropDownOptions}
                        className="w-[61%] gap-px text-blue_gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-row justify-center w-[96%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-start items-center w-full ml-1 gap-[25px]">
                  <div className="flex flex-col items-start justify-center w-[38%] gap-[13px] py-[19px] border-gray-50_01 border border-solid bg-white-A700 shadow-lg rounded-[20px]">
                    <Heading size="xl" as="h1" className="ml-[29px] !text-gray-900_01">
                      Highest Weight
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full mb-[3px]">
                      <div className="flex flex-row justify-between items-center w-full pb-3 px-3">
                        <div className="flex flex-row justify-between w-auto ml-[7px] gap-[60px]">
                          <Text size="3xl" as="p" className="mt-px !text-blue_gray-300_02 !font-opensans">
                            #
                          </Text>
                          <Text size="3xl" as="p" className="!text-blue_gray-300_02 !font-opensans">
                            Name
                          </Text>
                        </div>
                        <Text size="3xl" as="p" className="mr-[123px] !text-blue_gray-300_02 !font-opensans">
                          Weight Lift (in kg)
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full pt-[7px] gap-[7px]">
                        <div className="flex flex-row justify-between items-center w-[91%] pr-[214px]">
                          <div className="flex flex-row justify-between items-center w-auto gap-[55px]">
                            <Text size="2xl" as="p" className="mt-px !text-blue_gray-700">
                              01
                            </Text>
                            <Text size="2xl" as="p" className="!text-blue_gray-700">
                              Ankit
                            </Text>
                          </div>
                          <Text size="2xl" as="p" className="!text-blue_gray-700">
                            150 kg
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-[7px]">
                          <div className="flex flex-col w-full gap-[7px]">
                            <div className="flex flex-col items-center justify-start w-full gap-[7px]">
                              <Img src="images/img_02_ui_elements_6.svg" alt="image" className="h-[19px]" />
                              <div className="flex flex-row justify-start w-[91%] gap-[154px]">
                                <div className="flex flex-row justify-between items-center w-[22%]">
                                  <Text size="lg" as="p" className="!text-blue_gray-700">
                                    02
                                  </Text>
                                  <Text size="2xl" as="p" className="!text-blue_gray-700">
                                    Vikky
                                  </Text>
                                </div>
                                <Text size="2xl" as="p" className="!text-blue_gray-700">
                                  140 kg
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full gap-[7px]">
                              <Img src="images/img_02_ui_elements_6.svg" alt="02uielements" className="h-[19px]" />
                              <div className="flex flex-row justify-between items-center w-[91%] pr-[219px]">
                                <div className="flex flex-row justify-between items-center w-auto gap-[51px]">
                                  <Text size="lg" as="p" className="!text-blue_gray-700">
                                    03
                                  </Text>
                                  <Text size="2xl" as="p" className="!text-blue_gray-700">
                                    Happy
                                  </Text>
                                </div>
                                <Text size="2xl" as="p" className="h-[20px] !text-blue_gray-700">
                                  90 kg
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img src="images/img_02_ui_elements_6.svg" alt="02uielements" className="h-[19px]" />
                          <div className="flex flex-row justify-between items-center w-[91%] pr-[219px]">
                            <div className="flex flex-row justify-between items-center w-auto gap-[52px]">
                              <Text size="lg" as="p" className="!text-blue_gray-700">
                                04
                              </Text>
                              <Text size="2xl" as="p" className="!text-blue_gray-700">
                                Virat
                              </Text>
                            </div>
                            <Text size="2xl" as="p" className="h-[21px] !text-blue_gray-700">
                              80 kg
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[32%] gap-6 p-[21px] bg-white-A700 shadow-xl rounded-[20px]">
                    <Heading size="xl" as="h2" className="mt-1 ml-2.5 !text-gray-900_01">
                      One Rep Max
                    </Heading>
                    <div className="flex flex-row justify-start w-[98%] mb-[38px] ml-2.5">
                      <div className="flex flex-row justify-start items-start w-full">
                        <div className="flex flex-col items-center justify-start w-[10%] mb-[15px] z-[1]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row justify-center items-center w-full">
                              <div className="flex flex-col items-end justify-start w-full gap-5">
                                <div className="flex flex-row justify-start items-start w-full gap-[5px]">
                                  <Text size="md" as="p" className="text-right">
                                    1000
                                  </Text>
                                  <div className="h-px w-[16%] mt-[3px] bg-black-900" />
                                </div>
                                <div className="flex flex-col items-end justify-start w-[85%] gap-[25px]">
                                  <div className="flex flex-row justify-start items-center w-full gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      750
                                    </Text>
                                    <div className="h-px w-[19%] bg-black-900" />
                                  </div>
                                  <div className="flex flex-row justify-start items-center w-full gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      500
                                    </Text>
                                    <div className="h-px w-[19%] bg-black-900" />
                                  </div>
                                  <div className="flex flex-row justify-start items-center w-full gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      250
                                    </Text>
                                    <div className="h-px w-[19%] bg-black-900" />
                                  </div>
                                  <div className="flex flex-row justify-start items-center w-[58%] gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      0
                                    </Text>
                                    <div className="h-px w-[32%] bg-black-900" />
                                  </div>
                                </div>
                              </div>
                              <div className="h-[160px] w-px bg-black-900" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[91%] mt-[29px] ml-[-1px]">
                          <div className="flex flex-row justify-start items-end w-[90%] gap-[19px]">
                            <Img src="images/img_group_indigo_a200.svg" alt="image_two" className="h-[134px]" />
                            <Img src="images/img_group_purple_a100.svg" alt="image_three" className="h-[113px]" />
                            <Img src="images/img_group_deep_purple_a100_01.svg" alt="image_four" className="h-[74px]" />
                            <Img src="images/img_group_orange_200.svg" alt="image_five" className="h-[107px]" />
                            <Img src="images/img_group_teal_a100.svg" alt="image_six" className="h-[133px]" />
                            <Img src="images/img_group_green_200.svg" alt="image_seven" className="h-[116px]" />
                          </div>
                          <Img src="images/img_group_black_900.svg" alt="image_eight" className="h-[7px] mt-[-3px]" />
                          <div className="flex flex-row justify-between w-[89%] mt-[3px]">
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end w-[29%] gap-[18px] p-[11px] border-gray-50_01 border border-solid bg-white-A700 shadow-lg rounded-[20px]">
                    <Heading size="xl" as="h3" className="mt-[13px] ml-[11px] !text-gray-900_01">
                      Monthly Performance
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full mb-[3px] gap-[11px]">
                      <div className="h-[167px] w-full relative">
                        <Img
                          src="images/img_group_17.png"
                          alt="image_nine"
                          className="justify-center h-[167px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <Img
                          src="images/img_group_16.png"
                          alt="image_ten"
                          className="h-[93px] w-full bottom-[1%] right-0 left-0 m-auto object-cover absolute"
                        />
                      </div>
                      <Img src="images/img_02_ui_elements_6.svg" alt="02uielements" className="h-[21px]" />
                      <div className="flex flex-row justify-start w-[65%] gap-3.5">
                        <div className="flex flex-row justify-start items-center w-[45%] mb-0.5 gap-2">
                          <Img src="images/img_group_18.svg" alt="image_eleven" className="h-[9px]" />
                          <Text size="2xl" as="p" className="!text-blue_gray-300_02">
                            Last Month
                          </Text>
                        </div>
                        <div className="h-[24px] w-px bg-blue_gray-200" />
                        <div className="flex flex-row justify-start items-start w-[45%] gap-2">
                          <Img src="images/img_group_18_copy.svg" alt="image_twelve" className="h-[9px] mt-[7px]" />
                          <Text size="2xl" as="p" className="!text-blue_gray-300_02">
                            This Month
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[90%] mt-7 ml-14">
                  <div className="flex flex-col items-start justify-center w-[48%] gap-[5px] py-[22px] border-gray-50_01 border border-solid bg-white-A700 rounded-[20px]">
                    <Heading size="xl" as="h4" className="mt-[3px] ml-[42px] !text-gray-900_01">
                      Accuracy
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-between w-full pb-[11px] px-[11px]">
                        <Text size="3xl" as="p" className="mb-px ml-[31px] !text-blue_gray-300_02 !font-opensans">
                          Name
                        </Text>
                        <Text size="3xl" as="p" className="mr-[158px] !text-blue_gray-300_02 !font-opensans">
                          Accuracy Achieved
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-center w-full py-1">
                        <Text size="2xl" as="p" className="mr-[552px] !text-blue_gray-700">
                          Ankit
                        </Text>
                        <Button
                          color="blue_100_19"
                          size="xs"
                          className="mt-[-22px] mr-[54px] font-opensans border-indigo-700_01 border border-solid min-w-[49px] !rounded-lg"
                        >
                          80%
                        </Button>
                        <div className="h-[3px] w-[28%] mt-[-13px] mr-[145px] bg-blue-200 relative rounded-[1px]">
                          <div style={{ width: "78%" }} className="h-full bg-indigo-700 absolute rounded-[1px]" />
                        </div>
                        <Img
                          src="images/img_02_ui_elements_6.svg"
                          alt="02uielements"
                          className="h-[19px] mt-4 rounded-[9px]"
                        />
                        <Text size="2xl" as="p" className="mt-1.5 mr-[551px] !text-blue_gray-700">
                          Vikky
                        </Text>
                        <Button
                          color="gray_100_01"
                          size="xs"
                          className="mt-[-23px] mr-[54px] font-opensans z-[1] border-purple-A400 border border-solid min-w-[49px] !rounded-lg"
                        >
                          60%
                        </Button>
                        <div className="h-[3px] w-[28%] mt-[-15px] mr-[145px] bg-pink-100 relative rounded-[1px]">
                          <div style={{ width: "61%" }} className="h-full bg-purple-A400 absolute rounded-[1px]" />
                        </div>
                        <Img
                          src="images/img_02_ui_elements_6.svg"
                          alt="02uielements"
                          className="h-[19px] mt-[18px] rounded-[9px]"
                        />
                        <Text size="2xl" as="p" className="mt-[5px] mr-[538px] !text-blue_gray-700">
                          Happy
                        </Text>
                        <Button
                          color="gray_50"
                          size="xs"
                          className="mt-[-22px] mr-[54px] font-opensans border-deep_purple-A200 border border-solid min-w-[49px] !rounded-lg"
                        >
                          50%
                        </Button>
                        <div className="h-[3px] w-[28%] mt-[-10px] mr-[148px] bg-deep_purple-A100 relative rounded-[1px]">
                          <div style={{ width: "56%" }} className="h-full bg-deep_purple-A200 absolute rounded-[1px]" />
                        </div>
                        <Img
                          src="images/img_02_ui_elements_6.svg"
                          alt="02uielements"
                          className="h-[19px] mt-3.5 rounded-[9px]"
                        />
                        <Text size="2xl" as="p" className="mt-1 mr-[552px] !text-blue_gray-700">
                          Virat
                        </Text>
                        <Button
                          color="orange_50"
                          size="xs"
                          className="mt-[-22px] mr-[54px] font-opensans border-orange-600 border border-solid min-w-[49px] !rounded-lg"
                        >
                          25%
                        </Button>
                        <div className="h-[3px] w-[28%] mt-[-11px] mb-[3px] mr-[145px] bg-orange-100 relative rounded-[1px]">
                          <div style={{ width: "33%" }} className="h-full bg-amber-800 absolute rounded-[1px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[15px] p-[25px] border-gray-50_01 border border-solid bg-white-A700 shadow-lg rounded-[20px]">
                    <Heading size="xl" as="h5" className="ml-0.5 !text-gray-900_01">
                      Top performer of the week
                    </Heading>
                    <div className="flex flex-row justify-start w-[99%] ml-0.5">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-1">
                            <div className="flex flex-row justify-start items-center w-full gap-4">
                              <Text size="md" as="p" className="!text-blue_gray-400">
                                500
                              </Text>
                              <div className="h-px w-[94%] bg-blue_gray-50" />
                            </div>
                            <div className="flex flex-row justify-start items-start w-full gap-4">
                              <div className="flex flex-col items-start justify-start w-[4%] mt-1.5 gap-[11px]">
                                <Text size="md" as="p" className="!text-blue_gray-400">
                                  400
                                </Text>
                                <Text size="md" as="p" className="!text-blue_gray-400">
                                  300
                                </Text>
                                <Text size="md" as="p" className="!text-blue_gray-400">
                                  200
                                </Text>
                                <Text size="md" as="p" className="h-[18px] !text-blue_gray-400">
                                  100
                                </Text>
                                <Text size="md" as="p" className="!text-blue_gray-400">
                                  0
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[94%]">
                                <div className="h-[131px] w-full relative">
                                  <div className="flex flex-col items-center justify-start w-full gap-7 bottom-[21%] right-0 left-0 m-auto absolute">
                                    <div className="h-px w-full bg-blue_gray-50" />
                                    <div className="h-px w-full bg-blue_gray-50" />
                                  </div>
                                  <div className="h-px w-full top-[34%] right-0 left-0 m-auto bg-blue_gray-50 absolute" />
                                  <div className="h-px w-full top-[12%] right-0 left-0 m-auto bg-blue_gray-50 absolute" />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image_thirteen"
                                    className="h-[80px] bottom-0 left-[4%] m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image_fourteen"
                                    className="h-[98px] bottom-0 left-[19%] m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_14_copy_2.svg"
                                    alt="image_fifteen"
                                    className="h-[131px] left-[33%] bottom-0 top-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image_sixteen"
                                    className="h-[91px] bottom-0 right-0 left-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image_seventeen"
                                    className="h-[69px] bottom-0 right-[33%] m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image_eighteen"
                                    className="h-[96px] bottom-0 right-[19%] m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_group_14_copy_2.svg"
                                    alt="image_nineteen"
                                    className="h-[122px] bottom-0 right-[4%] m-auto absolute"
                                  />
                                </div>
                                <div className="h-px w-full bg-blue_gray-50" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-end w-[89%] mt-[5px]">
                          <Text size="md" as="p" className="!text-blue_gray-400 text-center">
                            Monday
                          </Text>
                          <Text size="md" as="p" className="ml-7 !text-blue_gray-400 text-center">
                            Tuesday
                          </Text>
                          <Text size="md" as="p" className="ml-4 !text-blue_gray-400 text-center">
                            Wednesday
                          </Text>
                          <Text size="md" as="p" className="ml-3.5 !text-blue_gray-400 text-center">
                            Thursday
                          </Text>
                          <Text size="md" as="p" className="ml-[33px] !text-blue_gray-400 text-center">
                            Friday
                          </Text>
                          <Text size="md" as="p" className="ml-8 !text-blue_gray-400 text-center">
                            Saturday
                          </Text>
                          <Text size="md" as="p" className="ml-7 !text-blue_gray-400 text-center">
                            Sunday
                          </Text>
                        </div>
                        <div className="flex flex-row justify-between w-[37%] mt-[18px]">
                          <div className="flex flex-row justify-start items-center w-[41%] gap-1.5">
                            <div className="h-[10px] w-[11px] bg-light_blue-A700 rounded-[5px]" />
                            <Heading size="xs" as="h6" className="!text-blue_gray-900_03 !font-opensans">
                              Rahul
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[41%] gap-1.5">
                            <div className="h-[10px] w-[11px] bg-green-A400 rounded-[5px]" />
                            <Heading size="xs" as="p" className="!text-blue_gray-900_03 !font-opensans">
                              Vikas
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[73%] mt-[27px] gap-11">
                  <div className="flex flex-row justify-start w-[55%] pb-14 border-gray-50_01 border border-solid bg-white-A700 shadow-lg rounded-[20px]">
                    <div className="flex flex-col items-center justify-start w-full gap-2">
                      <div className="flex flex-row justify-start w-full p-[5px]">
                        <Heading size="xl" as="h5" className="mt-5 ml-[23px] !text-gray-900_01">
                          Upcoming Competetion
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[92%] gap-3.5">
                        <div className="flex flex-col items-center justify-start h-[220px] w-[220px]">
                          <div className="flex flex-row justify-center w-full pb-1">
                            <div className="flex flex-row justify-center w-[23%] pt-0.5 px-0.5">
                              <Text size="xl" as="p" className="!text-blue_gray-900_04 text-center">
                                April
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
                            <div className="justify-center w-full gap-2 grid-cols-7 grid">
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-[3px]">
                                <Text as="p" className="mt-0.5 !text-gray-400 text-center">
                                  Mo
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                  Tu
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-[3px]">
                                <Text as="p" className="mt-0.5 !text-gray-400 text-center">
                                  We
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                  Th
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="mt-px !text-gray-400 text-center">
                                  Fr
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-blue-500 text-center">
                                  Sa
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-blue-500 text-center">
                                  Su
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] !text-gray-700 text-center">
                                  27
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-gray-700 text-center">
                                  28
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-gray-700 text-center">
                                  29
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-center h-[24px] w-full p-1">
                                <Text as="p" className="h-[14px] mt-px !text-gray-700 text-center">
                                  30
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-center h-[24px] w-full p-1">
                                <Text as="p" className="mt-px ml-px !text-gray-700 text-center">
                                  31
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-center h-[24px] w-full p-1">
                                <Text as="p" className="mt-px ml-1 !text-blue-500 text-center">
                                  1
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[24px] w-full p-1">
                                <Text as="p" className="!text-blue-500 text-center">
                                  2
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col w-full gap-[9px]">
                              <div className="flex flex-row justify-start w-full gap-2">
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-gray-400 text-center">
                                    3
                                  </Text>
                                </div>
                                <Button className="font-inter min-w-[24px] !rounded">4</Button>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-gray-400 text-center">
                                    5
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-gray-400 text-center">
                                    6
                                  </Text>
                                </div>
                                <Button className="font-inter min-w-[24px] !rounded">7</Button>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-blue-500 text-center">
                                    8
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-blue-500 text-center">
                                    9
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-full gap-2">
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-gray-400 text-center">
                                    10
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px ml-0.5 !text-gray-400 text-center">
                                    11
                                  </Text>
                                </div>
                                <Button className="font-inter min-w-[24px] !rounded">12</Button>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                    13
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                    14
                                  </Text>
                                </div>
                                <Button className="font-inter min-w-[24px] !rounded">15</Button>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-blue-500 text-center">
                                    16
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-full gap-2">
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="mt-px !text-gray-400 text-center">
                                    17
                                  </Text>
                                </div>
                                <Button className="font-inter min-w-[24px] !rounded">18</Button>
                                <div className="flex flex-col items-center justify-start h-[24px] w-[24px] p-1">
                                  <Text as="p" className="!text-gray-400 text-center">
                                    19
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                    20
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start h-[24px] w-[24px] p-1">
                                  <Text as="p" className="ml-px !text-gray-400 text-center">
                                    21
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] !text-blue-500 text-center">
                                    22
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-blue-500 text-center">
                                    23
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start w-full gap-2">
                                <div className="flex flex-col items-center justify-start h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] !text-gray-400 text-center">
                                    24
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                    25
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                    26
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] !text-gray-400 text-center">
                                    27
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-gray-400 text-center">
                                    28
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-blue-500 text-center">
                                    29
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-center h-[24px] w-[24px] p-1">
                                  <Text as="p" className="h-[14px] mt-px !text-blue-500 text-center">
                                    30
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[57%] gap-[9px]">
                          <Input
                            name="groupseven"
                            placeholder="4 April - South delhi weightlifting championship"
                            className="w-full"
                          />
                          <Input
                            color="green_50_33"
                            name="groupfour"
                            placeholder="7 April - South delhi weightlifting championship"
                            className="w-full"
                          />
                          <Input
                            name="groupfive"
                            placeholder="12 April - South delhi weightlifting championship"
                            className="w-full"
                          />
                          <Text
                            size="md"
                            as="p"
                            className="flex justify-center items-center w-[305px] h-[39px] px-2 py-2.5 !text-blue_gray-300_02 bg-green-50_33 rounded-[10px]"
                          >
                            <span className="text-blue_gray-300_02 font-medium">15 April</span>
                            <span className="text-blue_gray-300_02">- South delhi weightlifting championship</span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[42%] gap-[41px] p-5 bg-white-A700 shadow-2xl rounded-[14px]">
                    <Heading size="xl" as="h5" className="mt-[11px] ml-4 !text-gray-900_01">
                      Calories Burn
                    </Heading>
                    <div className="flex flex-row justify-start w-full mb-[63px]">
                      <div className="flex flex-row justify-start items-start w-full">
                        <div className="flex flex-col items-center justify-start w-[10%] mb-3 z-[1]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row justify-start items-start w-full gap-px">
                              <div className="flex flex-col items-end justify-start w-full gap-[15px]">
                                <div className="flex flex-row justify-start items-start w-full gap-[5px]">
                                  <Text size="md" as="p" className="text-right">
                                    1000
                                  </Text>
                                  <div className="h-px w-[16%] mt-0.5 bg-black-900" />
                                </div>
                                <div className="flex flex-col items-end justify-start w-[85%] gap-[18px]">
                                  <div className="flex flex-row justify-start items-start w-full gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      750
                                    </Text>
                                    <div className="h-px w-[19%] mt-1.5 bg-black-900" />
                                  </div>
                                  <div className="flex flex-row justify-start items-start w-full gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      500
                                    </Text>
                                    <div className="h-px w-[19%] mt-1.5 bg-black-900" />
                                  </div>
                                  <div className="flex flex-row justify-start items-start w-full gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      250
                                    </Text>
                                    <div className="h-px w-[19%] mt-1.5 bg-black-900" />
                                  </div>
                                  <div className="flex flex-row justify-start items-start w-[58%] gap-[5px]">
                                    <Text size="md" as="p" className="text-right">
                                      0
                                    </Text>
                                    <div className="h-px w-[32%] mt-1.5 bg-black-900" />
                                  </div>
                                </div>
                              </div>
                              <div className="h-[134px] w-px mt-0.5 bg-black-900" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[91%] mt-6 ml-[-1px]">
                          <div className="flex flex-row justify-start items-end w-[90%] gap-[19px]">
                            <Img src="images/img_group_indigo_a200.svg" alt="image_twenty" className="h-[112px]" />
                            <Img src="images/img_group_purple_a100.svg" alt="image_twentyone" className="h-[95px]" />
                            <Img
                              src="images/img_group_deep_purple_a100_01.svg"
                              alt="image_twentytwo"
                              className="h-[62px]"
                            />
                            <Img src="images/img_group_orange_200.svg" alt="image" className="h-[90px]" />
                            <Img src="images/img_group_teal_a100.svg" alt="image" className="h-[111px]" />
                            <Img src="images/img_group_green_200.svg" alt="image" className="h-[97px]" />
                          </div>
                          <Img
                            src="images/img_group_black_900.svg"
                            alt="image_twentysix"
                            className="h-[5px] mt-[-2px]"
                          />
                          <div className="flex flex-row justify-between w-[89%] mt-0.5">
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                            <Text size="xs" as="p" className="text-center">
                              Lorem
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-[24%] mt-[179px] ml-[670px]">
                  <Text size="xs" as="p" className="text-center">
                    Lorem
                  </Text>
                  <Text size="xs" as="p" className="text-center">
                    Lorem
                  </Text>
                  <Text size="xs" as="p" className="text-center">
                    Lorem
                  </Text>
                  <Text size="xs" as="p" className="text-center">
                    Lorem
                  </Text>
                  <Text size="xs" as="p" className="text-center">
                    Lorem
                  </Text>
                  <Text size="xs" as="p" className="text-center">
                    Lorem
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
