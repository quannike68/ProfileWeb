"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

type DialogType = "confirm" | "warning" | "error" | "info";

type ConfirmLinkDialogProps = {
  open: boolean;
  type?: DialogType;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const backdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const panel = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function ConfirmLinkDialog({
  open,
  type = "confirm",
  title,
  message,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
}: ConfirmLinkDialogProps) {
  // Config cho từng loại dialog
  const typeConfig = {
    confirm: {
      icon: <FiCheckCircle className="text-green-500 w-6 h-6" />,
      defaultTitle: "Xác nhận",
      defaultMessage: "Bạn có chắc muốn thực hiện hành động này?",
      confirmClass: "bg-green-500 text-white hover:bg-green-600",
    },
    warning: {
      icon: <FiAlertTriangle className="text-yellow-500 w-6 h-6" />,
      defaultTitle: "Cảnh báo",
      defaultMessage: "Hành động này có thể không thể hoàn tác!",
      confirmClass: "bg-yellow-500 text-black hover:bg-yellow-600",
    },
    error: {
      icon: <FiXCircle className="text-red-500 w-6 h-6" />,
      defaultTitle: "Lỗi",
      defaultMessage: "Đã xảy ra lỗi, bạn có muốn thử lại?",
      confirmClass: "bg-red-500 text-white hover:bg-red-600",
    },
    info: {
      icon: <FiInfo className="text-blue-500 w-6 h-6" />,
      defaultTitle: "Thông báo",
      defaultMessage: "Đây là một thông tin quan trọng.",
      confirmClass: "bg-blue-500 text-white hover:bg-blue-600",
    },
  }[type];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          aria-modal
          role="dialog"
        >
          {/* Backdrop */}
          <motion.div
            variants={backdrop}
            className="absolute inset-0 bg-black/80"
            onClick={onCancel}
          />
          {/* Panel */}
          <motion.div
            variants={panel}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative z-[61] w-[90%] max-w-md rounded-2xl bg-[#09110e] p-6 shadow-xl text-white"
          >
            <div className="flex items-center gap-2">
              {typeConfig.icon}
              <h3 className="text-xl font-semibold">
                {title || typeConfig.defaultTitle}
              </h3>
            </div>

            <p className="mt-2 text-gray-300">
              {message || typeConfig.defaultMessage}
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={onCancel}
                className="rounded-xl border border-gray-600 px-4 py-2 text-gray-200 hover:bg-gray-700 transition"
              >
                {cancelText || "Hủy"}
              </button>
              <button
                onClick={onConfirm}
                className={`rounded-xl px-4 py-2 font-medium transition ${typeConfig.confirmClass}`}
              >
                {confirmText || "Đồng ý"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
