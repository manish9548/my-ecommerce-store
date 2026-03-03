import { Dialog } from "@headlessui/react";

export default function AuthModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              Authentication Modal
            </h2>

            <p className="text-gray-600 mb-4">
              Login / Register form yaha ayega.
            </p>

            <button
              onClick={handleClose}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Dialog>
  );
}