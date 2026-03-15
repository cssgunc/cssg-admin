export default function Onboarding({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative w-full max-w-lg rounded-lg border border-black p-8">
      <button onClick={onBack} className="absolute left-8 top-8 text-xl">
        ←
      </button>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-medium">Welcome to CS+SG</h1>
        <p className="text-sm">Set up your basic profile</p>
      </div>

      {/* Avatar and Identity Fields */}
      <div className="mb-6 flex gap-8">
        <div className="relative">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-black">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 origin-center rotate-45 scale-150 border-t border-black"></div>
              <div className="absolute inset-0 origin-center -rotate-45 scale-150 border-t border-black"></div>
            </div>
          </div>
          <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white p-1">
            ✎
          </button>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="mb-1 block text-sm">First Name</label>
            <input type="text" className="w-full rounded-sm border border-black p-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Last Name</label>
            <input type="text" className="w-full rounded-sm border border-black p-2" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Pronouns</label>
            <select className="w-full rounded-sm border border-black bg-white p-2">
              <option value=""></option>
              <option value="he-him">He/Him</option>
              <option value="she-her">She/Her</option>
              <option value="they-them">They/Them</option>
            </select>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="space-y-2">
        <label className="block text-sm">Links</label>
        <div className="flex gap-2">
          <input type="text" className="flex-1 rounded-sm border border-black p-2" />
          <button className="border border-black px-4 py-2 transition-colors hover:bg-gray-100">
            Add
          </button>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 border-b border-gray-400 py-2">
            <span className="cursor-pointer text-sm hover:text-red-500">✕</span>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full text-center font-medium hover:underline">Done</button>
    </div>
  );
}
