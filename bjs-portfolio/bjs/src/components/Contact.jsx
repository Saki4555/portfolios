import { useState } from "react";
import { CONTACT } from "../constants";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { motion } from "motion/react";

import phoneQR from "../assets/qrs/qr2.png";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneNoCopied, setPhoneNoCopied] = useState(false);
  return (
    <div id="contact" className="border-b border-neutral-900 pt-10 lg:pt-0 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-20 text-4xl text-center"
      >
        Contact
      </motion.h2>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-10 items-center tracking-tighter">
        {/* email ---------------- */}
        <div className="flex flex-col px-3 justify-center items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <CopyToClipboard
              text={CONTACT.email}
              onCopy={() => setEmailCopied(!emailCopied)}
            >
              <motion.button whileTap={{scale: 0.7}} className="flex gap-4 mt-0 items-center px-10 py-1 border border-transparent hover:border-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                <p className="text-lg">
                  {CONTACT.email}
                </p>
                <p className="text-lg">
                  {emailCopied ? <FaCheck /> : <FaRegCopy />}
                </p>
              </motion.button>
            </CopyToClipboard>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="flex items-center gap-2 py-4"
          >
            <div className="h-px w-16 border border-neutral-600"></div>
            <p className="font-serif text-xs text-neutral-600">OR</p>
            <div className="h-px w-16 border border-neutral-600"></div>
          </motion.div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-sm"
          >
            Scan to Email Me
          </motion.p>
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            src={phoneQR}
            className="rounded-lg w-32 lg:w-40"
            alt=""
          />
        </div>

        {/* divider----------- */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="lg:h-36 h-px w-3/4 lg:w-px border border-neutral-600"
        ></motion.div>

        {/* phone & whatsapp ----------------- */}
        <div className="flex flex-col justify-center items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
          >
            <CopyToClipboard
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              text="+8801751034689"
              onCopy={() => setPhoneNoCopied(!phoneNoCopied)}
            >
              <motion.button whileTap={{scale: 0.7}} className="flex gap-4 mt-0 items-center px-10 py-1 border border-transparent hover:border-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                <p className="text-lg">{CONTACT.phoneNo}</p>
                <p className="text-lg">
                  {phoneNoCopied ? <FaCheck /> : <FaRegCopy />}
                </p>
              </motion.button>
            </CopyToClipboard>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="flex items-center gap-2 py-4"
          >
            <div className="h-px w-16 border border-neutral-600"></div>
            <p className="font-serif text-xs text-neutral-600">OR</p>
            <div className="h-px w-16 border border-neutral-600"></div>
          </motion.div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-sm"
          >
            Scan to Chat on WhatsApp
          </motion.p>
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            src={phoneQR}
            className="rounded-lg w-32 lg:w-40"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
