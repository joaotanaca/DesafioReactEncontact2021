import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useIntl } from "react-intl";
import Button from "src/components/atoms/Button";
import Heading from "src/components/atoms/Heading";
import Modal from "src/components/atoms/Modal";
import Text from "src/components/atoms/Text";
import ModalCreateTask from "src/components/molecules/ModalCreateTask";
import ProgressTask from "src/components/molecules/ProgressTask";
import { LOCALES } from "src/config/intl";
import { useLocale } from "src/context/locale";
import useDarkMode from "src/hooks/useDarkMode";
import useMobile from "src/hooks/useMobile";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const mobile = useMobile();
    const { toogleMode, mode } = useDarkMode();
    const { locale, setLocale } = useLocale();
    const { formatMessage } = useIntl();
    const variantsDarkMode: Variants = { dark: { x: 0 }, light: { x: "-60%" } };
    const variantsIntl: Variants = {
        [LOCALES.PORTUGUES]: { x: mobile ? 3.3 : 1.3 },
        [LOCALES.ENGLISH]: { x: mobile ? "-65%" : "-62%" },
    };
    return (
        <div className="grid grid-cols-4 items-center w-full pt-12 pb-10">
            <Heading
                level={1}
                fontWeight="semibold"
                className="col-span-4 sm:col-span-1 order-2 text-center sm:text-left"
            >
                {formatMessage({ id: "headerTitle" })}
            </Heading>
            <ProgressTask />
            <div className="col-span-4 sm:col-span-1 order-2 sm:order-3 flex justify-evenly mt-10 sm:mt-0">
                <Button
                    onClick={() =>
                        setLocale(
                            !(locale === LOCALES.PORTUGUES)
                                ? "PORTUGUES"
                                : "ENGLISH",
                        )
                    }
                    className="relative overflow-hidden"
                    style={{ width: mobile ? 38 : 40 }}
                    minContent
                >
                    <motion.div
                        className="flex justify-between"
                        animate={
                            locale === LOCALES.PORTUGUES
                                ? LOCALES.PORTUGUES
                                : LOCALES.ENGLISH
                        }
                        variants={variantsIntl}
                        style={{ width: "250%" }}
                    >
                        <div>
                            <Text fontWeight="semibold" fontColor="#FFF">
                                BR
                            </Text>
                        </div>
                        <div>
                            <Text fontWeight="semibold" fontColor="#FFF">
                                EN
                            </Text>
                        </div>
                    </motion.div>
                </Button>
                <Button
                    onClick={toogleMode}
                    className="relative overflow-hidden"
                    style={{ width: mobile ? 38 : 40 }}
                    minContent
                >
                    <motion.div
                        className="flex justify-between"
                        animate={mode}
                        variants={variantsDarkMode}
                        style={{ width: "250%" }}
                    >
                        <MdDarkMode size={24} />
                        <MdLightMode size={24} />
                    </motion.div>
                </Button>
                <Button onClick={() => setOpen((prev) => !prev)}>
                    <IoIosAdd size={24} />
                </Button>
                <Modal open={open} setOpen={setOpen}>
                    <ModalCreateTask setOpen={setOpen} />
                </Modal>
            </div>
        </div>
    );
};

export default Header;
