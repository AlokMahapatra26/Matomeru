import { FileText, Sparkles, UploadCloud, Wand2, Download } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: "Upload PDF",
    description: "Drop your document or select from files to begin summarization.",
  },
  {
    icon: Wand2,
    title: "AI Summarizes",
    description: "Our engine processes your content and generates a smart summary.",
  },
  {
    icon: Sparkles,
    title: "Get Insights",
    description: "Read through the key points and takeaways instantly.",
  },
  {
    icon: Download,
    title: "Download Summary",
    description: "Save or share your summarized PDF with a single click.",
  },
];

function Demo() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          How It Works
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Upload your PDF and get an AI-generated summary in seconds.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <Icon className="w-10 h-10 text-rose-500 mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </div>
        ))}
      </div>

      {/* 🪄 Demo Display Area */}
      <div className="min-h-[300px] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm">
        {/* 🧪 You can inject your demo component here */}
        Demo Area (Coming Soon)
      </div>
    </section>
  );
}

export default Demo;
