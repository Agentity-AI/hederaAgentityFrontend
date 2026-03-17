import React, { useState, useEffect } from "react";
import { authentication } from "../../store/zustant/useZustandHook";

const initialForm = {
  agentId: "",
  hederaAccountId: "0.0.123456",
  hederaPublicKey: "",
  kmsKeyId: "",
};

function HederaAgentFormModal({ isOpen, onClose }) {
  const { agents, linkWallet } = authentication();
  const [form, setForm] = useState(initialForm);

  // Reset form whenever the modal is opened
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await linkWallet(form);
      onClose();
    } catch (err) {
      console.error("Failed to link Hedera wallet:", err);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-lg rounded-lg bg-[#04020f] p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Hedera Agent Settings</h2>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* agentId */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Agent ID</span>
            </label>
           <select
  name="agentId"
  value={form.agentId}
  onChange={handleChange}
  className="select select-bordered w-full"
  required
>
  <option value="" disabled>
    Select agent
  </option>

  {agents?.map((agent) => (
    <option key={agent.id} value={agent.id}>
      {agent.id}
    </option>
  ))}
</select>

          </div>

          {/* hederaAccountId */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Hedera account ID</span>
            </label>
            <input
              type="text"
              name="hederaAccountId"
              value={form.hederaAccountId}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="0.0.123456"
              required
            />
          </div>

          {/* hederaPublicKey */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Hedera public key</span>
            </label>
            <input
              type="text"
              name="hederaPublicKey"
              value={form.hederaPublicKey}
              onChange={handleChange}
              className="input input-bordered w-full font-mono text-sm"
              placeholder="Public key"
              required
            />
          </div>

          {/* kmsKeyId */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">KMS key ID</span>
            </label>
            <input
              type="text"
              name="kmsKeyId"
              value={form.kmsKeyId}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="KMS key identifier"
              required
            />
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save agent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HederaAgentFormModal;
