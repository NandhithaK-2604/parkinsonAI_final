// // // // // // // // import { useState } from "react";

// // // // // // // // function SpectrogramsPage() {
// // // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // // //   const [results, setResults] = useState<any>(null);
// // // // // // // //   const [error, setError] = useState<string | null>(null);
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const handleUpload = async () => {
// // // // // // // //     if (!file) {
// // // // // // // //       setError("Please select a .wav file first!");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setError(null);
// // // // // // // //     setLoading(true);
// // // // // // // //     try {
// // // // // // // //       const formData = new FormData();
// // // // // // // //       formData.append("file", file);

// // // // // // // //       console.log("📤 Sending file to backend:", file.name);

// // // // // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // // // // //         method: "POST",
// // // // // // // //         body: formData,
// // // // // // // //       });

// // // // // // // //       if (!res.ok) {
// // // // // // // //         const errText = await res.text();
// // // // // // // //         throw new Error(`Server error ${res.status}: ${errText}`);
// // // // // // // //       }

// // // // // // // //       const data = await res.json();
// // // // // // // //       console.log("✅ Response from backend:", data);
// // // // // // // //       setResults(data);
// // // // // // // //     } catch (err: any) {
// // // // // // // //       console.error("❌ Upload failed:", err);
// // // // // // // //       setError(err.message || "Something went wrong");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="p-6">
// // // // // // // //       <h1 className="text-xl font-bold mb-4">Test Parkinson Prediction</h1>
// // // // // // // //       <input
// // // // // // // //         type="file"
// // // // // // // //         accept="audio/wav"
// // // // // // // //         onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // // // //       />
// // // // // // // //       <button
// // // // // // // //         onClick={handleUpload}
// // // // // // // //         disabled={loading}
// // // // // // // //         className={`ml-4 px-4 py-2 rounded text-white ${
// // // // // // // //           loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         {loading ? "Uploading..." : "Upload & Predict"}
// // // // // // // //       </button>

// // // // // // // //       {error && <p className="mt-4 text-red-600">{error}</p>}

// // // // // // // //       {results && (
// // // // // // // //         <div className="mt-6 space-y-6">
// // // // // // // //           {results.chunks.map((chunk: any, idx: number) => (
// // // // // // // //             <div key={idx} className="border p-4 rounded shadow">
// // // // // // // //               <h2 className="font-semibold">Chunk {chunk.chunk}</h2>
// // // // // // // //               <img
// // // // // // // //                 src={`data:image/png;base64,${chunk.spectrogram}`}
// // // // // // // //                 alt={`Chunk ${chunk.chunk}`}
// // // // // // // //                 className="my-2 rounded"
// // // // // // // //               />
// // // // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // // // //                 {Object.entries(chunk.predictions).map(([model, pred]: any) => (
// // // // // // // //                   <div key={model} className="p-2 border rounded">
// // // // // // // //                     <strong>{model.toUpperCase()}</strong>
// // // // // // // //                     <p>{pred.label}</p>
// // // // // // // //                     {pred.score !== null ? (
// // // // // // // //                       <p className="text-sm text-gray-500">Score: {pred.score.toFixed(4)}</p>
// // // // // // // //                     ) : (
// // // // // // // //                       <p className="text-sm text-red-500">Prediction error</p>
// // // // // // // //                     )}
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default SpectrogramsPage;


// // // // // // // // import React, { useState } from "react";
// // // // // // // // import {
// // // // // // // //   BarChart,
// // // // // // // //   Bar,
// // // // // // // //   XAxis,
// // // // // // // //   YAxis,
// // // // // // // //   Tooltip,
// // // // // // // //   Legend,
// // // // // // // //   ResponsiveContainer,
// // // // // // // // } from "recharts";

// // // // // // // // // Hard-coded metrics data to resolve import issues
// // // // // // // // const metricsData = {
// // // // // // // //   cnn_lstm: {
// // // // // // // //     accuracy: 0.86,
// // // // // // // //     precision: 0.85,
// // // // // // // //     recall: 0.87,
// // // // // // // //     f1_score: 0.86,
// // // // // // // //   },
// // // // // // // //   bilstm: {
// // // // // // // //     accuracy: 0.74,
// // // // // // // //     precision: 0.73,
// // // // // // // //     recall: 0.75,
// // // // // // // //     f1_score: 0.74,
// // // // // // // //   },
// // // // // // // //   mobilenetv2: {
// // // // // // // //     accuracy: 0.91,
// // // // // // // //     precision: 0.90,
// // // // // // // //     recall: 0.91,
// // // // // // // //     f1_score: 0.91,
// // // // // // // //   },
// // // // // // // //   resnet50: {
// // // // // // // //     accuracy: 0.72,
// // // // // // // //     precision: 0.71,
// // // // // // // //     recall: 0.73,
// // // // // // // //     f1_score: 0.72,
// // // // // // // //   },
// // // // // // // //   gru: {
// // // // // // // //     accuracy: 0.50,
// // // // // // // //     precision: 0.49,
// // // // // // // //     recall: 0.51,
// // // // // // // //     f1_score: 0.50,
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // // A component to display a single model's graph set
// // // // // // // // const ModelGraphCard = ({ title, graphImage }) => (
// // // // // // // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // // // // // // //     <img
// // // // // // // //       src={graphImage}
// // // // // // // //       alt={`${title} Performance Graphs`}
// // // // // // // //       className="w-full h-auto rounded-lg"
// // // // // // // //     />
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // function SpectrogramsPage() {
// // // // // // // //   const [file, setFile] = useState<File | null>(null);
// // // // // // // //   const [results, setResults] = useState<any>(null);
// // // // // // // //   const [error, setError] = useState<string | null>(null);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [view, setView] = useState<"spectrograms" | "predictions" | "metrics">(
// // // // // // // //     "spectrograms"
// // // // // // // //   );

// // // // // // // //   const handleUpload = async () => {
// // // // // // // //     if (!file) {
// // // // // // // //       setError("Please select a .wav file first!");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setError(null);
// // // // // // // //     setLoading(true);
// // // // // // // //     try {
// // // // // // // //       const formData = new FormData();
// // // // // // // //       formData.append("file", file);

// // // // // // // //       // This URL is a placeholder and should be updated to a live backend
// // // // // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // // // // //         method: "POST",
// // // // // // // //         body: formData,
// // // // // // // //       });

// // // // // // // //       if (!res.ok) {
// // // // // // // //         const errText = await res.text();
// // // // // // // //         throw new Error(`Server error ${res.status}: ${errText}`);
// // // // // // // //       }

// // // // // // // //       const data = await res.json();
// // // // // // // //       setResults(data);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError(err.message || "Something went wrong");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Convert metrics data to a chart-friendly format
// // // // // // // //   const chartData = Object.entries(metricsData).map(([model, values]: any) => ({
// // // // // // // //     model: model.toUpperCase(),
// // // // // // // //     Accuracy: values.accuracy,
// // // // // // // //     Precision: values.precision,
// // // // // // // //     Recall: values.recall,
// // // // // // // //     F1: values.f1_score,
// // // // // // // //   }));

// // // // // // // //   return (
// // // // // // // //     <div className="flex bg-gray-100 min-h-screen font-sans">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// // // // // // // //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// // // // // // // //           Dashboard
// // // // // // // //         </h2>
        
// // // // // // // //         {/* Navigation buttons */}
// // // // // // // //         <button
// // // // // // // //           onClick={() => setView("spectrograms")}
// // // // // // // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // // // // // // //             view === "spectrograms"
// // // // // // // //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// // // // // // // //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 7.5c-.3 0-.5.2-.5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0V7.5c0-.3-.2-.5-.5-.5H1.5c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5h17c.3 0 .5-.2.5-.5V8c0-.3-.2-.5-.5-.5zM2 9v9h16V9H2zm16-4V2.5c0-.3-.2-.5-.5-.5H1.5c-.3 0-.5.2-.5.5V5h17zM6 3H4v2h2V3zm4 0H8v2h2V3zm4 0h-2v2h2V3zm4 0h-2v2h2V3zM3 13h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 16h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 19h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>
// // // // // // // //           <span>Spectrograms</span>
// // // // // // // //         </button>

// // // // // // // //         <button
// // // // // // // //           onClick={() => setView("predictions")}
// // // // // // // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // // // // // // //             view === "predictions"
// // // // // // // //               ? "bg-green-600 text-white shadow-md transform scale-105"
// // // // // // // //               : "bg-gray-700 text-gray-200 hover:bg-green-500 hover:text-white"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5c-4.142 0-7.5 3.358-7.5 7.5S7.858 16.5 12 16.5c4.142 0 7.5-3.358 7.5-7.5S16.142 1.5 12 1.5zm-5 7.5c0-.3.2-.5.5-.5h4.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 10H7.5c-.3 0-.5-.2-.5-.5z"/></svg>
// // // // // // // //           <span>Predictions</span>
// // // // // // // //         </button>

// // // // // // // //         <button
// // // // // // // //           onClick={() => setView("metrics")}
// // // // // // // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // // // // // // //             view === "metrics"
// // // // // // // //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// // // // // // // //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a.5.5 0 0 0-.5.5V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10V3a.5.5 0 0 0-.5-.5z"/></svg>
// // // // // // // //           <span>Metrics</span>
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Main content */}
// // // // // // // //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// // // // // // // //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// // // // // // // //           Test Parkinson Prediction
// // // // // // // //         </h1>

// // // // // // // //         {/* Upload section - Always visible */}
// // // // // // // //         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
// // // // // // // //           <label htmlFor="file-upload" className="flex-1 text-gray-700 font-medium">
// // // // // // // //             Select a `.wav` file to upload:
// // // // // // // //           </label>
// // // // // // // //           <input
// // // // // // // //             id="file-upload"
// // // // // // // //             type="file"
// // // // // // // //             accept="audio/wav"
// // // // // // // //             onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // // // //             className="flex-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// // // // // // // //           />
// // // // // // // //           <button
// // // // // // // //             onClick={handleUpload}
// // // // // // // //             disabled={loading || !file}
// // // // // // // //             className={`flex-shrink-0 px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// // // // // // // //               loading || !file
// // // // // // // //                 ? "bg-gray-400 cursor-not-allowed"
// // // // // // // //                 : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // // // // // //             }`}
// // // // // // // //           >
// // // // // // // //             {loading ? "Uploading..." : "Upload & Predict"}
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {error && (
// // // // // // // //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6">
// // // // // // // //             <p>{error}</p>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Spectrograms View */}
// // // // // // // //         {results && view === "spectrograms" && (
// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //             {results.chunks.map((chunk, idx) => (
// // // // // // // //               <div
// // // // // // // //                 key={idx}
// // // // // // // //                 className="bg-white rounded-xl shadow-lg p-4 text-center"
// // // // // // // //               >
// // // // // // // //                 <h2 className="font-semibold text-gray-800 mb-2">
// // // // // // // //                   Chunk {chunk.chunk}
// // // // // // // //                 </h2>
// // // // // // // //                 <img
// // // // // // // //                   src={`data:image/png;base64,${chunk.spectrogram}`}
// // // // // // // //                   alt={`Spectrogram of chunk ${chunk.chunk}`}
// // // // // // // //                   className="w-full h-auto rounded-lg shadow-inner"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Predictions View */}
// // // // // // // //         {results && view === "predictions" && (
// // // // // // // //           <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // // //               Prediction Results
// // // // // // // //             </h2>
// // // // // // // //             <div className="overflow-x-auto">
// // // // // // // //               <table className="min-w-full border-collapse">
// // // // // // // //                 <thead>
// // // // // // // //                   <tr className="bg-gray-100">
// // // // // // // //                     <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                       Model
// // // // // // // //                     </th>
// // // // // // // //                     <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                       Prediction
// // // // // // // //                     </th>
// // // // // // // //                     <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                       Score
// // // // // // // //                     </th>
// // // // // // // //                   </tr>
// // // // // // // //                 </thead>
// // // // // // // //                 <tbody>
// // // // // // // //                   {results.chunks[0] &&
// // // // // // // //                     Object.entries(results.chunks[0].predictions).map(
// // // // // // // //                       ([model, pred]) => (
// // // // // // // //                         <tr key={model} className="hover:bg-gray-50 transition-colors">
// // // // // // // //                           <td className="border-b p-4 font-semibold text-gray-700">
// // // // // // // //                             {model.toUpperCase()}
// // // // // // // //                           </td>
// // // // // // // //                           <td className="border-b p-4 text-gray-600">
// // // // // // // //                             {pred.label}
// // // // // // // //                           </td>
// // // // // // // //                           <td className="border-b p-4 text-gray-600">
// // // // // // // //                             {pred.score?.toFixed(4) ?? "—"}
// // // // // // // //                           </td>
// // // // // // // //                         </tr>
// // // // // // // //                       )
// // // // // // // //                     )}
// // // // // // // //                 </tbody>
// // // // // // // //               </table>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Metrics View */}
// // // // // // // //         {view === "metrics" && (
// // // // // // // //           <div className="space-y-10">
// // // // // // // //             {/* Metrics Chart */}
// // // // // // // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // // //                 Model Metrics
// // // // // // // //               </h2>
// // // // // // // //               <div className="h-80">
// // // // // // // //                 <ResponsiveContainer width="100%" height="100%">
// // // // // // // //                   <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
// // // // // // // //                     <XAxis dataKey="model" />
// // // // // // // //                     <YAxis />
// // // // // // // //                     <Tooltip />
// // // // // // // //                     <Legend />
// // // // // // // //                     <Bar dataKey="Accuracy" fill="#3b82f6" name="Accuracy" />
// // // // // // // //                     <Bar dataKey="Precision" fill="#10b981" name="Precision" />
// // // // // // // //                     <Bar dataKey="Recall" fill="#f59e0b" name="Recall" />
// // // // // // // //                     <Bar dataKey="F1" fill="#ef4444" name="F1 Score" />
// // // // // // // //                   </BarChart>
// // // // // // // //                 </ResponsiveContainer>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Metrics Table */}
// // // // // // // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // // //                 Detailed Metrics Table
// // // // // // // //               </h2>
// // // // // // // //               <div className="overflow-x-auto">
// // // // // // // //                 <table className="min-w-full border-collapse">
// // // // // // // //                   <thead>
// // // // // // // //                     <tr className="bg-gray-100">
// // // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                         Model
// // // // // // // //                       </th>
// // // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                         Accuracy
// // // // // // // //                       </th>
// // // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                         Precision
// // // // // // // //                       </th>
// // // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                         Recall
// // // // // // // //                       </th>
// // // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // // //                         F1 Score
// // // // // // // //                       </th>
// // // // // // // //                     </tr>
// // // // // // // //                   </thead>
// // // // // // // //                   <tbody>
// // // // // // // //                     {Object.entries(metricsData).map(([model, values]) => (
// // // // // // // //                       <tr key={model} className="hover:bg-gray-50 transition-colors">
// // // // // // // //                         <td className="border-b p-4 font-semibold text-gray-700">
// // // // // // // //                           {model.toUpperCase()}
// // // // // // // //                         </td>
// // // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // // //                           {values.accuracy.toFixed(4)}
// // // // // // // //                         </td>
// // // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // // //                           {values.precision.toFixed(4)}
// // // // // // // //                         </td>
// // // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // // //                           {values.recall.toFixed(4)}
// // // // // // // //                         </td>
// // // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // // //                           {values.f1_score.toFixed(4)}
// // // // // // // //                         </td>
// // // // // // // //                       </tr>
// // // // // // // //                     ))}
// // // // // // // //                   </tbody>
// // // // // // // //                 </table>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Model Graphs Section */}
// // // // // // // //             <div className="space-y-6">
// // // // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // // //                 Model Performance Graphs
// // // // // // // //               </h2>
// // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // //                 <ModelGraphCard
// // // // // // // //                   title="CNN-LSTM Performance"
// // // // // // // //                   graphImage="https://placehold.co/600x400/fff/000?text=CNN-LSTM+Graph"
// // // // // // // //                 />
// // // // // // // //                 <ModelGraphCard
// // // // // // // //                   title="BiLSTM Performance"
// // // // // // // //                   graphImage="https://placehold.co/600x400/fff/000?text=BiLSTM+Graph"
// // // // // // // //                 />
// // // // // // // //                 <ModelGraphCard
// // // // // // // //                   title="MobileNetV2 Performance"
// // // // // // // //                   graphImage="https://placehold.co/600x400/fff/000?text=MobileNetV2+Graph"
// // // // // // // //                 />
// // // // // // // //                 <ModelGraphCard
// // // // // // // //                   title="ResNet50 Performance"
// // // // // // // //                   graphImage="https://placehold.co/600x400/fff/000?text=ResNet50+Graph"
// // // // // // // //                 />
// // // // // // // //                 <ModelGraphCard
// // // // // // // //                   title="GRU Performance"
// // // // // // // //                   graphImage="https://placehold.co/600x400/fff/000?text=GRU+Graph"
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default SpectrogramsPage;
// // // // // // // import React, { useState } from "react";
// // // // // // // import {
// // // // // // //   BarChart,
// // // // // // //   Bar,
// // // // // // //   XAxis,
// // // // // // //   YAxis,
// // // // // // //   Tooltip,
// // // // // // //   Legend,
// // // // // // //   ResponsiveContainer,
// // // // // // // } from "recharts";

// // // // // // // // 1. Import your local image assets.
// // // // // // // // Make sure these paths are correct relative to the location of this file.
// // // // // // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // // // // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // // // // // import gruGraph from "../assets/plots/GRU.png";
// // // // // // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // // // // // import resnetGraph from "../assets/plots/ResNet50.png";
// // // // // // // const ConfusionMatrix = ({ matrix }) => {
// // // // // // //   const maxVal = Math.max(...matrix.flat());

// // // // // // //   return (
// // // // // // //     <div className="inline-block">
// // // // // // //       {matrix.map((row, i) => (
// // // // // // //         <div key={i} className="flex">
// // // // // // //           {row.map((val, j) => {
// // // // // // //             const intensity = Math.round((val / maxVal) * 255);
// // // // // // //             return (
// // // // // // //               <div
// // // // // // //                 key={j}
// // // // // // //                 className="w-16 h-16 flex items-center justify-center text-white font-bold"
// // // // // // //                 style={{ backgroundColor: `rgb(0,0,${intensity})` }}
// // // // // // //               >
// // // // // // //                 {val}
// // // // // // //               </div>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // // Hard-coded metrics data to resolve import issues
// // // // // // // const metricsData = {
// // // // // // //   cnn:{
    
// // // // // // //       accuracy: 0.93,
// // // // // // //       precision: 0.92,
// // // // // // //       recall: 0.95,
// // // // // // //       f1_score: 0.93,
// // // // // // //       confusion_matrix: [[262, 23],
// // // // // // //       [
// // // // // // //         14,
// // // // // // //         271
// // // // // // //       ]
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   cnn_lstm: {
// // // // // // //     accuracy: 0.93,
// // // // // // //     precision: 0.89,
// // // // // // //     recall: 0.91,
// // // // // // //     f1_score: 0.91,
// // // // // // //     confusion_matrix: [
// // // // // // //       [
// // // // // // //         267,
// // // // // // //         18
// // // // // // //       ],
// // // // // // //       [
// // // // // // //         18,
// // // // // // //         267
// // // // // // //       ]
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   bilstm: {
// // // // // // //     accuracy: 0.77,
// // // // // // //     precision: 0.82,
// // // // // // //     recall: 0.71,
// // // // // // //     f1_score: 0.76,
// // // // // // //     confusion_matrix: [
// // // // // // //       [
// // // // // // //         241,
// // // // // // //         44
// // // // // // //       ],
// // // // // // //       [
// // // // // // //         82,
// // // // // // //         203
// // // // // // //       ]
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   mobilenetv2: {
// // // // // // //     accuracy: 0.91,
// // // // // // //     precision: 0.90,
// // // // // // //     recall: 0.91,
// // // // // // //     f1_score: 0.91,
// // // // // // //     confusion_matrix: [
// // // // // // //       [
// // // // // // //         259,
// // // // // // //         26
// // // // // // //       ],
// // // // // // //       [
// // // // // // //         28,
// // // // // // //         257
// // // // // // //       ]
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   resnet50: {
// // // // // // //     accuracy: 0.76,
// // // // // // //     precision: 0.71,
// // // // // // //     recall: 0.88,
// // // // // // //     f1_score: 0.78,
// // // // // // //     confusion_matrix: [
// // // // // // //       [
// // // // // // //         183,
// // // // // // //         102
// // // // // // //       ],
// // // // // // //       [
// // // // // // //         33,
// // // // // // //         252
// // // // // // //       ]
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   gru: {
// // // // // // //     accuracy: 0.50,
// // // // // // //     precision: 0.49,
// // // // // // //     recall: 0.51,
// // // // // // //     f1_score: 0.50,
// // // // // // //     confusion_matrix: [
// // // // // // //       [
// // // // // // //         285,
// // // // // // //         0
// // // // // // //       ],
// // // // // // //       [
// // // // // // //         285,
// // // // // // //         0
// // // // // // //       ]
// // // // // // //     ]

  
// // // // // // // },
// // // // // // // }

// // // // // // // // A component to display a single model's graph set
// // // // // // // const ModelGraphCard = ({ title, graphImage }) => (
// // // // // // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // // // // // //     <img
// // // // // // //       src={graphImage}
// // // // // // //       alt={`${title} Performance Graphs`}
// // // // // // //       className="w-full h-auto rounded-lg"
// // // // // // //     />
// // // // // // //   </div>
// // // // // // // );

// // // // // // // function SpectrogramsPage() {
// // // // // // //   const [file, setFile] = useState(null);
// // // // // // //   const [results, setResults] = useState(null);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [view, setView] = useState("spectrograms");

// // // // // // //   const handleUpload = async () => {
// // // // // // //     if (!file) {
// // // // // // //       setError("Please select a .wav file first!");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setError(null);
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append("file", file);

// // // // // // //       // This URL is a placeholder and should be updated to a live backend
// // // // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // // // //         method: "POST",
// // // // // // //         body: formData,
// // // // // // //       });

// // // // // // //       if (!res.ok) {
// // // // // // //         const errText = await res.text();
// // // // // // //         throw new Error(`Server error ${res.status}: ${errText}`);
// // // // // // //       }

// // // // // // //       const data = await res.json();
// // // // // // //       setResults(data);
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message || "Something went wrong");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Convert metrics data to a chart-friendly format
// // // // // // //   const chartData = Object.entries(metricsData).map(([model, values]) => ({
// // // // // // //     model: model.toUpperCase(),
// // // // // // //     Accuracy: values.accuracy,
// // // // // // //     Precision: values.precision,
// // // // // // //     Recall: values.recall,
// // // // // // //     F1: values.f1_score,
// // // // // // //     CM:values.confusion_matrix
// // // // // // //   }));

// // // // // // //   return (
// // // // // // //     <div className="flex bg-gray-100 min-h-screen font-sans">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// // // // // // //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// // // // // // //           Dashboard
// // // // // // //         </h2>
        
// // // // // // //         {/* Navigation buttons */}
// // // // // // //         <button
// // // // // // //           onClick={() => setView("spectrograms")}
// // // // // // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // // // // // //             view === "spectrograms"
// // // // // // //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// // // // // // //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 7.5c-.3 0-.5.2-.5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-1 0V7.5c0-.3-.2-.5-.5-.5H1.5c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5h17c.3 0 .5-.2.5-.5V8c0-.3-.2-.5-.5-.5zM2 9v9h16V9H2zm16-4V2.5c0-.3-.2-.5-.5-.5H1.5c-.3 0-.5.2-.5.5V5h17zM6 3H4v2h2V3zm4 0H8v2h2V3zm4 0h-2v2h2V3zm4 0h-2v2h2V3zM3 13h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 16h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 19h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>
// // // // // // //           <span>Spectrograms</span>
// // // // // // //         </button>

// // // // // // //         <button
// // // // // // //           onClick={() => setView("predictions")}
// // // // // // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // // // // // //             view === "predictions"
// // // // // // //               ? "bg-green-600 text-white shadow-md transform scale-105"
// // // // // // //               : "bg-gray-700 text-gray-200 hover:bg-green-500 hover:text-white"
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5c-4.142 0-7.5 3.358-7.5 7.5S7.858 16.5 12 16.5c4.142 0 7.5-3.358 7.5-7.5S16.142 1.5 12 1.5zm-5 7.5c0-.3.2-.5.5-.5h4.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 10H7.5c-.3 0-.5-.2-.5-.5z"/></svg>
// // // // // // //           <span>Predictions</span>
// // // // // // //         </button>

// // // // // // //         <button
// // // // // // //           onClick={() => setView("metrics")}
// // // // // // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // // // // // //             view === "metrics"
// // // // // // //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// // // // // // //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a.5.5 0 0 0-.5.5V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10V3a.5.5 0 0 0-.5-.5z"/></svg>
// // // // // // //           <span>Metrics</span>
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Main content */}
// // // // // // //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// // // // // // //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// // // // // // //           Test Parkinson Prediction
// // // // // // //         </h1>

// // // // // // //         {/* Upload section - Always visible */}
// // // // // // //         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
// // // // // // //           <label htmlFor="file-upload" className="flex-1 text-gray-700 font-medium">
// // // // // // //             Select a `.wav` file to upload:
// // // // // // //           </label>
// // // // // // //           <input
// // // // // // //             id="file-upload"
// // // // // // //             type="file"
// // // // // // //             accept="audio/wav"
// // // // // // //             onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // // //             className="flex-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             onClick={handleUpload}
// // // // // // //             disabled={loading || !file}
// // // // // // //             className={`flex-shrink-0 px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// // // // // // //               loading || !file
// // // // // // //                 ? "bg-gray-400 cursor-not-allowed"
// // // // // // //                 : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             {loading ? "Uploading..." : "Upload & Predict"}
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {error && (
// // // // // // //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6">
// // // // // // //             <p>{error}</p>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Spectrograms View */}
// // // // // // //         {results && view === "spectrograms" && (
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //             {results.chunks.map((chunk, idx) => (
// // // // // // //               <div
// // // // // // //                 key={idx}
// // // // // // //                 className="bg-white rounded-xl shadow-lg p-4 text-center"
// // // // // // //               >
// // // // // // //                 <h2 className="font-semibold text-gray-800 mb-2">
// // // // // // //                   Chunk {chunk.chunk}
// // // // // // //                 </h2>
// // // // // // //                 <img
// // // // // // //                   src={`data:image/png;base64,${chunk.spectrogram}`}
// // // // // // //                   alt={`Spectrogram of chunk ${chunk.chunk}`}
// // // // // // //                   className="w-full h-auto rounded-lg shadow-inner"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Predictions View */}
// // // // // // //         {results && view === "predictions" && (
// // // // // // //           <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // //               Prediction Results
// // // // // // //             </h2>
// // // // // // //             <div className="overflow-x-auto">
// // // // // // //               <table className="min-w-full border-collapse">
// // // // // // //                 <thead>
// // // // // // //                   <tr className="bg-gray-100">
// // // // // // //                     <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                       Model
// // // // // // //                     </th>
// // // // // // //                     <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                       Prediction
// // // // // // //                     </th>
// // // // // // //                     <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                       Score
// // // // // // //                     </th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody>
// // // // // // //                   {results.chunks[0] &&
// // // // // // //                     Object.entries(results.chunks[0].predictions).map(
// // // // // // //                       ([model, pred]) => (
// // // // // // //                         <tr key={model} className="hover:bg-gray-50 transition-colors">
// // // // // // //                           <td className="border-b p-4 font-semibold text-gray-700">
// // // // // // //                             {model.toUpperCase()}
// // // // // // //                           </td>
// // // // // // //                           <td className="border-b p-4 text-gray-600">
// // // // // // //                             {pred.label}
// // // // // // //                           </td>
// // // // // // //                           <td className="border-b p-4 text-gray-600">
// // // // // // //                             {pred.score?.toFixed(4) ?? "—"}
// // // // // // //                           </td>
// // // // // // //                         </tr>
// // // // // // //                       )
// // // // // // //                     )}
// // // // // // //                 </tbody>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Metrics View */}
// // // // // // //         {view === "metrics" && (
// // // // // // //           <div className="space-y-10">
// // // // // // //             {/* Metrics Chart */}
// // // // // // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // //                 Model Metrics
// // // // // // //               </h2>
// // // // // // //               <div className="h-80">
// // // // // // //                 <ResponsiveContainer width="100%" height="100%">
// // // // // // //                   <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
// // // // // // //                     <XAxis dataKey="model" />
// // // // // // //                     <YAxis />
// // // // // // //                     <Tooltip />
// // // // // // //                     <Legend />
// // // // // // //                     <Bar dataKey="Accuracy" fill="#3b82f6" name="Accuracy" />
// // // // // // //                     <Bar dataKey="Precision" fill="#10b981" name="Precision" />
// // // // // // //                     <Bar dataKey="Recall" fill="#f59e0b" name="Recall" />
// // // // // // //                     <Bar dataKey="F1" fill="#ef4444" name="F1 Score" />
// // // // // // //                   </BarChart>
// // // // // // //                 </ResponsiveContainer>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Metrics Table */}
// // // // // // //             <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // //                 Detailed Metrics Table
// // // // // // //               </h2>
// // // // // // //               <div className="overflow-x-auto">
// // // // // // //                 <table className="min-w-full border-collapse">
// // // // // // //                   <thead>
// // // // // // //                     <tr className="bg-gray-100">
// // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                         Model
// // // // // // //                       </th>
// // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                         Accuracy
// // // // // // //                       </th>
// // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                         Precision
// // // // // // //                       </th>
// // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                         Recall
// // // // // // //                       </th>
// // // // // // //                       <th className="border-b-2 border-gray-200 p-4 text-left text-sm font-semibold text-gray-600">
// // // // // // //                         F1 Score
// // // // // // //                       </th>
// // // // // // //                     </tr>
// // // // // // //                   </thead>
// // // // // // //                   <tbody>
// // // // // // //                     {Object.entries(metricsData).map(([model, values]) => (
// // // // // // //                       <tr key={model} className="hover:bg-gray-50 transition-colors">
// // // // // // //                         <td className="border-b p-4 font-semibold text-gray-700">
// // // // // // //                           {model.toUpperCase()}
// // // // // // //                         </td>
// // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // //                           {values.accuracy.toFixed(4)}
// // // // // // //                         </td>
// // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // //                           {values.precision.toFixed(4)}
// // // // // // //                         </td>
// // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // //                           {values.recall.toFixed(4)}
// // // // // // //                         </td>
// // // // // // //                         <td className="border-b p-4 text-gray-600">
// // // // // // //                           {values.f1_score.toFixed(4)}
// // // // // // //                         </td>
// // // // // // //                       </tr>
// // // // // // //                     ))}
// // // // // // //                   </tbody>
// // // // // // //                 </table>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             {/* Confusion Matrices Section */}
// // // // // // // <div className="bg-white rounded-xl shadow-lg p-6">
// // // // // // //   <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // //     Confusion Matrices
// // // // // // //   </h2>
// // // // // // //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //     {Object.entries(metricsData).map(([model, values]) => (
// // // // // // //       <div key={model} className="text-center">
// // // // // // //         <h3 className="text-lg font-semibold mb-2">{model.toUpperCase()}</h3>
// // // // // // //         <ConfusionMatrix matrix={values.confusion_matrix} />
// // // // // // //       </div>
// // // // // // //     ))}
// // // // // // //   </div>
// // // // // // // </div>


// // // // // // //             {/* Model Graphs Section */}
// // // // // // //             <div className="space-y-6">
// // // // // // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // // //                 Model Performance Graphs
// // // // // // //               </h2>
// // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // //                 <ModelGraphCard
// // // // // // //                   title="CNN-LSTM Performance"
// // // // // // //                   graphImage={cnnLstmGraph}
// // // // // // //                 />
// // // // // // //                 <ModelGraphCard
// // // // // // //                   title="BiLSTM Performance"
// // // // // // //                   graphImage={bilstmGraph}
// // // // // // //                 />
// // // // // // //                 <ModelGraphCard
// // // // // // //                   title="MobileNetV2 Performance"
// // // // // // //                   graphImage={mobilenetGraph}
// // // // // // //                 />
// // // // // // //                 <ModelGraphCard
// // // // // // //                   title="ResNet50 Performance"
// // // // // // //                   graphImage={resnetGraph}
// // // // // // //                 />
// // // // // // //                 <ModelGraphCard
// // // // // // //                   title="GRU Performance"
// // // // // // //                   graphImage={gruGraph}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default SpectrogramsPage;

// // // // // // import React, { useState } from "react";

// // // // // // // Confusion Matrices Data
// // // // // // const confusionMatricesData = {
// // // // // //   'BiLSTM ': { TP: 80, TN: 85, FP: 10, FN: 5 },
// // // // // //   'BiGRU': { TP: 75, TN: 82, FP: 13, FN: 8 },
// // // // // //   'CNN': { TP: 95, TN: 92, FP: 8, FN: 5 },
// // // // // //   'MLP ': { TP: 98, TN: 97, FP: 2, FN: 3 },
// // // // // //   'Logistic Regression': { TP: 90, TN: 88, FP: 12, FN: 10 },
// // // // // //   'Gradient Boosting ': { TP: 85, TN: 87, FP: 13, FN: 15 },
// // // // // //   'K-Nearest Neighbors': { TP: 82, TN: 80, FP: 18, FN: 20 },
// // // // // //   'Random Forest': { TP: 88, TN: 85, FP: 15, FN: 12 },
// // // // // //   'Support Vector Machine': { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // // // // };

// // // // // // // Features
// // // // // // const totalFeatures = [
// // // // // //   'voiceID', 'meanF0Hz', 'maxF0Hz', 'minF0Hz', 'stdF0Hz', 'jitter_local',
// // // // // //   'jitter_abs', 'jitter_rap', 'jitter_ddp', 'jitter_ppq5', 'shimmer_local',
// // // // // //   'shimmer_db', 'shimmer_apq3', 'shimmer_apq5', 'shimmer_dda', 'hnr', 'mfcc0',
// // // // // //   'mfcc1', 'mfcc2', 'mfcc3', 'mfcc4', 'mfcc5', 'mfcc6', 'mfcc7', 'mfcc8',
// // // // // //   'mfcc9', 'mfcc10', 'mfcc11', 'mel_mean0', 'mel_mean1', 'mel_mean2', 'mel_mean3',
// // // // // //   'mel_mean4', 'mel_mean5', 'mel_mean6', 'mel_mean7', 'mel_mean8', 'mel_mean9',
// // // // // //   'mel_mean10', 'mel_mean11', 'mel_mean12', 'mel_mean13', 'mel_mean14',
// // // // // //   'mel_mean15', 'mel_mean16', 'mel_mean17', 'mel_mean18', 'mel_mean19',
// // // // // //   'mel_mean20', 'mel_mean21', 'mel_mean22', 'mel_mean23', 'mel_mean24',
// // // // // //   'mel_mean25', 'mel_mean26', 'mel_mean27', 'mel_mean28', 'mel_mean29',
// // // // // //   'mel_mean30', 'mel_mean31', 'mel_mean32', 'mel_mean33', 'mel_mean34',
// // // // // //   'mel_mean35', 'mel_mean36', 'mel_mean37', 'mel_mean38', 'mel_mean39',
// // // // // //   'mel_std0', 'mel_std1', 'mel_std2', 'mel_std3', 'mel_std4', 'mel_std5',
// // // // // //   'mel_std6', 'mel_std7', 'mel_std8', 'mel_std9', 'mel_std10', 'mel_std11',
// // // // // //   'mel_std12', 'mel_std13', 'mel_std14', 'mel_std15', 'mel_std16', 'mel_std17',
// // // // // //   'mel_std18', 'mel_std19', 'mel_std20', 'mel_std21', 'mel_std22', 'mel_std23',
// // // // // //   'mel_std24', 'mel_std25', 'mel_std26', 'mel_std27', 'mel_std28', 'mel_std29',
// // // // // //   'mel_std30', 'mel_std31', 'mel_std32', 'mel_std33', 'mel_std34', 'mel_std35',
// // // // // //   'mel_std36', 'mel_std37', 'mel_std38', 'mel_std39', 'label'
// // // // // // ];

// // // // // // const selectedFeatures = [
// // // // // //   'maxF0Hz', 'shimmer_apq3', 'shimmer_apq5', 'shimmer_dda', 'hnr',
// // // // // //   'mfcc8', 'mfcc9', 'mfcc10', 'mel_mean4', 'mel_mean5', 'mel_mean6',
// // // // // //   'mel_mean7', 'mel_mean8', 'mel_mean9', 'mel_mean15', 'mel_mean16',
// // // // // //   'mel_mean17', 'mel_mean30', 'mel_mean31', 'mel_mean32', 'mel_mean33',
// // // // // //   'mel_mean34', 'mel_mean36', 'mel_mean37', 'mel_mean38', 'mel_mean39',
// // // // // //   'mel_std1', 'mel_std29', 'mel_std30', 'mel_std31',
// // // // // //   'mel_std32', 'mel_std33', 'mel_std34', 'mel_std35', 'mel_std36',
// // // // // //   'mel_std37', 'mel_std38', 'mel_std39'
// // // // // // ];

// // // // // // function SpectrogramsPage() {
// // // // // //   const [file, setFile] = useState(null);
// // // // // //   const [results, setResults] = useState(null);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const handleUpload = async () => {
// // // // // //     if (!file) {
// // // // // //       setError("Please select a .wav file first!");
// // // // // //       return;
// // // // // //     }
// // // // // //     setError(null);
// // // // // //     setLoading(true);

// // // // // //     try {
// // // // // //       const formData = new FormData();
// // // // // //       formData.append("file", file);

// // // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // // //         method: "POST",
// // // // // //         body: formData,
// // // // // //       });

// // // // // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // // // // //       const data = await res.json();
// // // // // //       setResults(data);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message || "Something went wrong");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-10 bg-gray-100 min-h-screen">
// // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // // // // //         Parkinson Prediction Results
// // // // // //       </h1>

// // // // // //       {/* Upload Section */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex items-center gap-4">
// // // // // //         <input
// // // // // //           type="file"
// // // // // //           accept="audio/wav"
// // // // // //           onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // // // // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // // // // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // // // // //         />
// // // // // //         <button
// // // // // //           onClick={handleUpload}
// // // // // //           disabled={loading || !file}
// // // // // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // // // // //             loading || !file
// // // // // //               ? "bg-gray-400"
// // // // // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // // // //           }`}
// // // // // //         >
// // // // // //           {loading ? "Uploading..." : "Upload & Predict"}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {error && (
// // // // // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // // // // //       )}

// // // // // //       {/* Prediction Results */}
// // // // // //       {results && (
// // // // // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Predictions</h2>
// // // // // //           <table className="min-w-full border-collapse">
// // // // // //             <thead>
// // // // // //               <tr className="bg-gray-100">
// // // // // //                 <th className="border-b p-4 text-left">Model</th>
// // // // // //                 <th className="border-b p-4 text-left">Prediction</th>
// // // // // //                 <th className="border-b p-4 text-left">Score</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {results.chunks[0] &&
// // // // // //                 Object.entries(results.chunks[0].predictions).map(
// // // // // //                   ([model, pred]) => (
// // // // // //                     <tr key={model} className="hover:bg-gray-50">
// // // // // //                       <td className="border-b p-4 font-semibold">{model}</td>
// // // // // //                       <td className="border-b p-4">{pred.label}</td>
// // // // // //                       <td className="border-b p-4">
// // // // // //                         {pred.score?.toFixed(4) ?? "—"}
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   )
// // // // // //                 )}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Confusion Matrices */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // //           Confusion Matrices
// // // // // //         </h2>
// // // // // //         <table className="min-w-full border-collapse">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-100">
// // // // // //               <th className="border-b p-4">Model</th>
// // // // // //               <th className="border-b p-4">TP</th>
// // // // // //               <th className="border-b p-4">TN</th>
// // // // // //               <th className="border-b p-4">FP</th>
// // // // // //               <th className="border-b p-4">FN</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // // // // //               <tr key={model} className="hover:bg-gray-50">
// // // // // //                 <td className="border-b p-4 font-semibold">{model}</td>
// // // // // //                 <td className="border-b p-4">{vals.TP}</td>
// // // // // //                 <td className="border-b p-4">{vals.TN}</td>
// // // // // //                 <td className="border-b p-4">{vals.FP}</td>
// // // // // //                 <td className="border-b p-4">{vals.FN}</td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       </div>

// // // // // //       {/* Features Extracted */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow">
// // // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // //           Features Extracted
// // // // // //         </h2>
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //           {/* Total Features */}
// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // // // // //             <div className="p-3 border rounded-lg h-60 overflow-y-auto text-sm">
// // // // // //               {totalFeatures.map((f, i) => (
// // // // // //                 <span
// // // // // //                   key={i}
// // // // // //                   className="inline-block bg-gray-100 rounded-full px-3 py-1 m-1"
// // // // // //                 >
// // // // // //                   {f}
// // // // // //                 </span>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Selected Features */}
// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-lg mb-2">Selected Features</h3>
// // // // // //             <div className="p-3 border rounded-lg h-60 overflow-y-auto text-sm">
// // // // // //               {selectedFeatures.map((f, i) => (
// // // // // //                 <span
// // // // // //                   key={i}
// // // // // //                   className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1"
// // // // // //                 >
// // // // // //                   {f}
// // // // // //                 </span>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default SpectrogramsPage;

// // // // // // import React, { useState } from "react";

// // // // // // // ML Models Results
// // // // // // const mlModelComparison = [
// // // // // //   { Model: "Random Forest", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.964, Precision: 0.964, Recall: 0.964, "F1 Score": 0.964 },
// // // // // //   { Model: "Gradient Boosting", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.94, Precision: 0.94, Recall: 0.94, "F1 Score": 0.94 },
// // // // // //   { Model: "Support Vector Machine", Method: "PCA", "Train Accuracy": 0.986, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // // //   { Model: "K-Nearest Neighbors", Method: "PCA", "Train Accuracy": 0.944, "Test Accuracy": 0.922, Precision: 0.922, Recall: 0.922, "F1 Score": 0.922 },
// // // // // //   { Model: "Logistic Regression", Method: "PCA", "Train Accuracy": 0.962, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // // //   { Model: "Random Forest", Method: "SELECTKBEST", "Train Accuracy": 1.0, "Test Accuracy": 0.832, Precision: 0.833, Recall: 0.832, "F1 Score": 0.832 },
// // // // // //   { Model: "Gradient Boosting", Method: "SELECTKBEST", "Train Accuracy": 0.985, "Test Accuracy": 0.934, Precision: 0.934, Recall: 0.934, "F1 Score": 0.934 },
// // // // // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Train Accuracy": 0.998, "Test Accuracy": 0.826, Precision: 0.838, Recall: 0.826, "F1 Score": 0.824 },
// // // // // //   { Model: "K-Nearest Neighbors", Method: "SELECTKBEST", "Train Accuracy": 0.935, "Test Accuracy": 0.892, Precision: 0.893, Recall: 0.892, "F1 Score": 0.892 },
// // // // // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Train Accuracy": 0.964, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // // //   { Model: "Random Forest", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // // //   { Model: "Gradient Boosting", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // // //   { Model: "Support Vector Machine", Method: "None", "Train Accuracy": 0.994, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // // //   { Model: "K-Nearest Neighbors", Method: "None", "Train Accuracy": 0.969, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // // //   { Model: "Logistic Regression", Method: "None", "Train Accuracy": 0.972, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // // // ];

// // // // // // // Confusion Matrices Data
// // // // // // const confusionMatricesData = {
// // // // // //   "BiLSTM ": { TP: 80, TN: 85, FP: 10, FN: 5 },
// // // // // //   "BiGRU": { TP: 75, TN: 82, FP: 13, FN: 8 },
// // // // // //   CNN: { TP: 95, TN: 92, FP: 8, FN: 5 },
// // // // // //   "MLP ": { TP: 98, TN: 97, FP: 2, FN: 3 },
// // // // // //   "Logistic Regression": { TP: 90, TN: 88, FP: 12, FN: 10 },
// // // // // //   "Gradient Boosting ": { TP: 85, TN: 87, FP: 13, FN: 15 },
// // // // // //   "K-Nearest Neighbors": { TP: 82, TN: 80, FP: 18, FN: 20 },
// // // // // //   "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
// // // // // //   "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // // // // };

// // // // // // // Deep Learning Models Results
// // // // // // const dlModelsResults = [
// // // // // //   { Model: "MLP", Method: "pca", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, Precision: 0.972, Recall: 0.97, "F1 Score": 0.97, MSE: 0.03, MAE: 0.03 },
// // // // // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // // // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, Precision: 0.799, Recall: 0.796, "F1 Score": 0.795, MSE: 0.204, MAE: 0.204 },
// // // // // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, Precision: 0.843, Recall: 0.838, "F1 Score": 0.837, MSE: 0.162, MAE: 0.162 },
// // // // // //   { Model: "MLP", Method: "selectkbest", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, Precision: 0.988, Recall: 0.988, "F1 Score": 0.988, MSE: 0.012, MAE: 0.012 },
// // // // // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, Precision: 0.86, Recall: 0.856, "F1 Score": 0.856, MSE: 0.144, MAE: 0.144 },
// // // // // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, Precision: 0.765, Recall: 0.754, "F1 Score": 0.752, MSE: 0.246, MAE: 0.246 },
// // // // // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, Precision: 0.85, Recall: 0.844, "F1 Score": 0.843, MSE: 0.156, MAE: 0.156 },
// // // // // //   { Model: "MLP", Method: "none", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // // //   { Model: "CNN", Method: "none", Accuracy: 0.976, Precision: 0.96, Recall: 0.976, "F1 Score": 0.976, MSE: 0.024, MAE: 0.024 },
// // // // // //   { Model: "LSTM", Method: "none", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // // // //   { Model: "GRU", Method: "none", Accuracy: 0.832, Precision: 0.834, Recall: 0.832, "F1 Score": 0.832, MSE: 0.168, MAE: 0.168 },
// // // // // //   { Model: "BiLSTM", Method: "none", Accuracy: 0.898, Precision: 0.873, Recall: 0.868, "F1 Score": 0.867, MSE: 0.132, MAE: 0.132 },
// // // // // // ];
// // // // // // const totalFeatures = [
// // // // // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local",
// // // // // //   "jitter_abs", "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local",
// // // // // //   "shimmer_db", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0",
// // // // // //   "mfcc1", "mfcc2", "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8",
// // // // // //   "mfcc9", "mfcc10", "mfcc11", "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3",
// // // // // //   "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9",
// // // // // //   "mel_mean10", "mel_mean11", "mel_mean12", "mel_mean13", "mel_mean14",
// // // // // //   "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean18", "mel_mean19",
// // // // // //   "mel_mean20", "mel_mean21", "mel_mean22", "mel_mean23", "mel_mean24",
// // // // // //   "mel_mean25", "mel_mean26", "mel_mean27", "mel_mean28", "mel_mean29",
// // // // // //   "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34",
// // // // // //   "mel_mean35", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // // // //   "mel_std0", "mel_std1", "mel_std2", "mel_std3", "mel_std4", "mel_std5",
// // // // // //   "mel_std6", "mel_std7", "mel_std8", "mel_std9", "mel_std10", "mel_std11",
// // // // // //   "mel_std12", "mel_std13", "mel_std14", "mel_std15", "mel_std16", "mel_std17",
// // // // // //   "mel_std18", "mel_std19", "mel_std20", "mel_std21", "mel_std22", "mel_std23",
// // // // // //   "mel_std24", "mel_std25", "mel_std26", "mel_std27", "mel_std28", "mel_std29",
// // // // // //   "mel_std30", "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35",
// // // // // //   "mel_std36", "mel_std37", "mel_std38", "mel_std39", "label"
// // // // // // ];

// // // // // // const selectedFeatures = [
// // // // // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr",
// // // // // //   "mfcc8", "mfcc9", "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6",
// // // // // //   "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean15", "mel_mean16",
// // // // // //   "mel_mean17", "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33",
// // // // // //   "mel_mean34", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // // // //   "mel_std1", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // // // // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37",
// // // // // //   "mel_std38", "mel_std39"
// // // // // // ];

// // // // // // function SpectrogramsPage() {
// // // // // //   const [file, setFile] = useState(null);
// // // // // //   const [results, setResults] = useState(null);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const handleUpload = async () => {
// // // // // //     if (!file) {
// // // // // //       setError("Please select a .wav file first!");
// // // // // //       return;
// // // // // //     }
// // // // // //     setError(null);
// // // // // //     setLoading(true);

// // // // // //     try {
// // // // // //       const formData = new FormData();
// // // // // //       formData.append("file", file);

// // // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // // //         method: "POST",
// // // // // //         body: formData,
// // // // // //       });

// // // // // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // // // // //       const data = await res.json();
// // // // // //       setResults(data);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message || "Something went wrong");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-10 bg-gray-100 min-h-screen">
// // // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // // // // //         Parkinson Prediction Results
// // // // // //       </h1>

// // // // // //       {/* Upload Section */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex items-center gap-4">
// // // // // //         <input
// // // // // //           type="file"
// // // // // //           accept="audio/wav"
// // // // // //           onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // // // // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // // // // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // // // // //         />
// // // // // //         <button
// // // // // //           onClick={handleUpload}
// // // // // //           disabled={loading || !file}
// // // // // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // // // // //             loading || !file
// // // // // //               ? "bg-gray-400"
// // // // // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // // // //           }`}
// // // // // //         >
// // // // // //           {loading ? "Uploading..." : "Upload & Predict"}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {error && (
// // // // // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // // // // //       )}

// // // // // //       {/* Prediction Results */}
// // // // // //       {results && (
// // // // // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Predictions</h2>
// // // // // //           <table className="min-w-full border-collapse text-sm">
// // // // // //             <thead>
// // // // // //               <tr className="bg-gray-100">
// // // // // //                 <th className="border-b p-3 text-left">Model</th>
// // // // // //                 <th className="border-b p-3 text-left">Prediction</th>
// // // // // //                 <th className="border-b p-3 text-left">Score</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {results.chunks[0] &&
// // // // // //                 Object.entries(results.chunks[0].predictions).map(
// // // // // //                   ([model, pred]) => (
// // // // // //                     <tr key={model} className="hover:bg-gray-50">
// // // // // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // // // // //                       <td className="border-b p-3">{pred.label}</td>
// // // // // //                       <td className="border-b p-3">
// // // // // //                         {pred.score?.toFixed(4) ?? "—"}
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   )
// // // // // //                 )}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Confusion Matrices */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // //           Confusion Matrices
// // // // // //         </h2>
// // // // // //         <table className="min-w-full border-collapse text-sm">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-100">
// // // // // //               <th className="border-b p-3">Model</th>
// // // // // //               <th className="border-b p-3">TP</th>
// // // // // //               <th className="border-b p-3">TN</th>
// // // // // //               <th className="border-b p-3">FP</th>
// // // // // //               <th className="border-b p-3">FN</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // // // // //               <tr key={model} className="hover:bg-gray-50">
// // // // // //                 <td className="border-b p-3 font-semibold">{model}</td>
// // // // // //                 <td className="border-b p-3">{vals.TP}</td>
// // // // // //                 <td className="border-b p-3">{vals.TN}</td>
// // // // // //                 <td className="border-b p-3">{vals.FP}</td>
// // // // // //                 <td className="border-b p-3">{vals.FN}</td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       </div>

// // // // // //       {/* Machine Learning Models Results */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // //           Machine Learning Models Results
// // // // // //         </h2>
// // // // // //         <table className="min-w-full border-collapse text-sm">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-100">
// // // // // //               <th className="border-b p-3">Model</th>
// // // // // //               <th className="border-b p-3">Method</th>
// // // // // //               <th className="border-b p-3">Train Accuracy</th>
// // // // // //               <th className="border-b p-3">Test Accuracy</th>
// // // // // //               <th className="border-b p-3">Precision</th>
// // // // // //               <th className="border-b p-3">Recall</th>
// // // // // //               <th className="border-b p-3">F1 Score</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {mlModelComparison.map((row, i) => (
// // // // // //               <tr key={i} className="hover:bg-gray-50">
// // // // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // // // //                 <td className="border-b p-3">{row.Method}</td>
// // // // // //                 <td className="border-b p-3">{row["Train Accuracy"]}</td>
// // // // // //                 <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // // // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       </div>

// // // // // //       {/* Deep Learning Models Results */}
// // // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // // //           Deep Learning Models Results
// // // // // //         </h2>
// // // // // //         <table className="min-w-full border-collapse text-sm">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-100">
// // // // // //               <th className="border-b p-3">Model</th>
// // // // // //               <th className="border-b p-3">Method</th>
// // // // // //               <th className="border-b p-3">Accuracy</th>
// // // // // //               <th className="border-b p-3">Precision</th>
// // // // // //               <th className="border-b p-3">Recall</th>
// // // // // //               <th className="border-b p-3">F1 Score</th>
// // // // // //               <th className="border-b p-3">MSE</th>
// // // // // //               <th className="border-b p-3">MAE</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {dlModelsResults.map((row, i) => (
// // // // // //               <tr key={i} className="hover:bg-gray-50">
// // // // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // // // //                 <td className="border-b p-3">{row.Method}</td>
// // // // // //                 <td className="border-b p-3">{row.Accuracy}</td>
// // // // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // // // //                 <td className="border-b p-3">{row.MSE}</td>
// // // // // //                 <td className="border-b p-3">{row.MAE}</td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default SpectrogramsPage;
// // // // // // ``

// // // // // import React, { useState } from "react";

// // // // // // ML Models Results
// // // // // const mlModelComparison = [
// // // // //   { Model: "Random Forest", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.964, Precision: 0.964, Recall: 0.964, "F1 Score": 0.964 },
// // // // //   { Model: "Gradient Boosting", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.94, Precision: 0.94, Recall: 0.94, "F1 Score": 0.94 },
// // // // //   { Model: "Support Vector Machine", Method: "PCA", "Train Accuracy": 0.986, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "K-Nearest Neighbors", Method: "PCA", "Train Accuracy": 0.944, "Test Accuracy": 0.922, Precision: 0.922, Recall: 0.922, "F1 Score": 0.922 },
// // // // //   { Model: "Logistic Regression", Method: "PCA", "Train Accuracy": 0.962, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "Random Forest", Method: "SELECTKBEST", "Train Accuracy": 1.0, "Test Accuracy": 0.832, Precision: 0.833, Recall: 0.832, "F1 Score": 0.832 },
// // // // //   { Model: "Gradient Boosting", Method: "SELECTKBEST", "Train Accuracy": 0.985, "Test Accuracy": 0.934, Precision: 0.934, Recall: 0.934, "F1 Score": 0.934 },
// // // // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Train Accuracy": 0.998, "Test Accuracy": 0.826, Precision: 0.838, Recall: 0.826, "F1 Score": 0.824 },
// // // // //   { Model: "K-Nearest Neighbors", Method: "SELECTKBEST", "Train Accuracy": 0.935, "Test Accuracy": 0.892, Precision: 0.893, Recall: 0.892, "F1 Score": 0.892 },
// // // // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Train Accuracy": 0.964, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // //   { Model: "Random Forest", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "Gradient Boosting", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // //   { Model: "Support Vector Machine", Method: "None", "Train Accuracy": 0.994, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // //   { Model: "K-Nearest Neighbors", Method: "None", "Train Accuracy": 0.969, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "Logistic Regression", Method: "None", "Train Accuracy": 0.972, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // // ];

// // // // // // Confusion Matrices Data
// // // // // const confusionMatricesData = {
// // // // //   "BiLSTM ": { TP: 80, TN: 85, FP: 10, FN: 5 },
// // // // //   "BiGRU": { TP: 75, TN: 82, FP: 13, FN: 8 },
// // // // //   CNN: { TP: 95, TN: 92, FP: 8, FN: 5 },
// // // // //   "MLP ": { TP: 98, TN: 97, FP: 2, FN: 3 },
// // // // //   "Logistic Regression": { TP: 90, TN: 88, FP: 12, FN: 10 },
// // // // //   "Gradient Boosting ": { TP: 85, TN: 87, FP: 13, FN: 15 },
// // // // //   "K-Nearest Neighbors": { TP: 82, TN: 80, FP: 18, FN: 20 },
// // // // //   "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
// // // // //   "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // // // };

// // // // // // Deep Learning Models Results
// // // // // const dlModelsResults = [
// // // // //   { Model: "MLP", Method: "pca", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, Precision: 0.972, Recall: 0.97, "F1 Score": 0.97, MSE: 0.03, MAE: 0.03 },
// // // // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, Precision: 0.799, Recall: 0.796, "F1 Score": 0.795, MSE: 0.204, MAE: 0.204 },
// // // // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, Precision: 0.843, Recall: 0.838, "F1 Score": 0.837, MSE: 0.162, MAE: 0.162 },
// // // // //   { Model: "MLP", Method: "selectkbest", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, Precision: 0.988, Recall: 0.988, "F1 Score": 0.988, MSE: 0.012, MAE: 0.012 },
// // // // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, Precision: 0.86, Recall: 0.856, "F1 Score": 0.856, MSE: 0.144, MAE: 0.144 },
// // // // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, Precision: 0.765, Recall: 0.754, "F1 Score": 0.752, MSE: 0.246, MAE: 0.246 },
// // // // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, Precision: 0.85, Recall: 0.844, "F1 Score": 0.843, MSE: 0.156, MAE: 0.156 },
// // // // //   { Model: "MLP", Method: "none", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // //   { Model: "CNN", Method: "none", Accuracy: 0.976, Precision: 0.96, Recall: 0.976, "F1 Score": 0.976, MSE: 0.024, MAE: 0.024 },
// // // // //   { Model: "LSTM", Method: "none", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // // //   { Model: "GRU", Method: "none", Accuracy: 0.832, Precision: 0.834, Recall: 0.832, "F1 Score": 0.832, MSE: 0.168, MAE: 0.168 },
// // // // //   { Model: "BiLSTM", Method: "none", Accuracy: 0.898, Precision: 0.873, Recall: 0.868, "F1 Score": 0.867, MSE: 0.132, MAE: 0.132 },
// // // // // ];
// // // // // const totalFeatures = [
// // // // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local",
// // // // //   "jitter_abs", "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local",
// // // // //   "shimmer_db", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0",
// // // // //   "mfcc1", "mfcc2", "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8",
// // // // //   "mfcc9", "mfcc10", "mfcc11", "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3",
// // // // //   "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9",
// // // // //   "mel_mean10", "mel_mean11", "mel_mean12", "mel_mean13", "mel_mean14",
// // // // //   "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean18", "mel_mean19",
// // // // //   "mel_mean20", "mel_mean21", "mel_mean22", "mel_mean23", "mel_mean24",
// // // // //   "mel_mean25", "mel_mean26", "mel_mean27", "mel_mean28", "mel_mean29",
// // // // //   "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34",
// // // // //   "mel_mean35", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // // //   "mel_std0", "mel_std1", "mel_std2", "mel_std3", "mel_std4", "mel_std5",
// // // // //   "mel_std6", "mel_std7", "mel_std8", "mel_std9", "mel_std10", "mel_std11",
// // // // //   "mel_std12", "mel_std13", "mel_std14", "mel_std15", "mel_std16", "mel_std17",
// // // // //   "mel_std18", "mel_std19", "mel_std20", "mel_std21", "mel_std22", "mel_std23",
// // // // //   "mel_std24", "mel_std25", "mel_std26", "mel_std27", "mel_std28", "mel_std29",
// // // // //   "mel_std30", "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35",
// // // // //   "mel_std36", "mel_std37", "mel_std38", "mel_std39", "label"
// // // // // ];

// // // // // const selectedFeatures = [
// // // // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr",
// // // // //   "mfcc8", "mfcc9", "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6",
// // // // //   "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean15", "mel_mean16",
// // // // //   "mel_mean17", "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33",
// // // // //   "mel_mean34", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // // //   "mel_std1", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // // // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37",
// // // // //   "mel_std38", "mel_std39"
// // // // // ];

// // // // // function SpectrogramsPage() {
// // // // //   const [file, setFile] = useState(null);
// // // // //   const [results, setResults] = useState(null);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const handleUpload = async () => {
// // // // //     if (!file) {
// // // // //       setError("Please select a .wav file first!");
// // // // //       return;
// // // // //     }
// // // // //     setError(null);
// // // // //     setLoading(true);

// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       formData.append("file", file);

// // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // //         method: "POST",
// // // // //         body: formData,
// // // // //       });

// // // // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // // // //       const data = await res.json();
// // // // //       setResults(data);
// // // // //     } catch (err) {
// // // // //       setError(err.message || "Something went wrong");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-10 bg-gray-100 min-h-screen">
// // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // // // //         Parkinson Prediction Results
// // // // //       </h1>

// // // // //       {/* Upload Section */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex items-center gap-4">
// // // // //         <input
// // // // //           type="file"
// // // // //           accept="audio/wav"
// // // // //           onChange={(e) => setFile(e.target.files?.[0] || null)}
// // // // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // // // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // // // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // // // //         />
// // // // //         <button
// // // // //           onClick={handleUpload}
// // // // //           disabled={loading || !file}
// // // // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // // // //             loading || !file
// // // // //               ? "bg-gray-400"
// // // // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // // //           }`}
// // // // //         >
// // // // //           {loading ? "Uploading..." : "Upload & Predict"}
// // // // //         </button>
// // // // //       </div>

// // // // //       {error && (
// // // // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // // // //       )}

// // // // //       {/* Prediction Results */}
// // // // //       {results && (
// // // // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Predictions</h2>
// // // // //           <table className="min-w-full border-collapse text-sm">
// // // // //             <thead>
// // // // //               <tr className="bg-gray-100">
// // // // //                 <th className="border-b p-3 text-left">Model</th>
// // // // //                 <th className="border-b p-3 text-left">Prediction</th>
// // // // //                 <th className="border-b p-3 text-left">Score</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {results.chunks[0] &&
// // // // //                 Object.entries(results.chunks[0].predictions).map(
// // // // //                   ([model, pred]) => (
// // // // //                     <tr key={model} className="hover:bg-gray-50">
// // // // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // // // //                       <td className="border-b p-3">{pred.label}</td>
// // // // //                       <td className="border-b p-3">
// // // // //                         {pred.score?.toFixed(4) ?? "—"}
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   )
// // // // //                 )}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Confusion Matrices */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // //           Confusion Matrices
// // // // //         </h2>
// // // // //         {/* Here's where you'd typically display an image if you had one */}
// // // // //         <p className="mb-4 text-gray-600">
// // // // //           Below is a conceptual representation of a confusion matrix. For actual, dynamic images, you would replace this with an `img` tag pointing to a generated image.
// // // // //         </p>
// // // // //         {/* Placeholder for a confusion matrix image */}
// // // // //         <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg border border-gray-200">
// // // // //           <p className="text-gray-400 text-lg">
// // // // //             Confusion Matrix Image Placeholder
// // // // //           </p>
// // // // //         </div>
// // // // //         {/* This tag would generate an image of a generic confusion matrix. */}
// // // // //         <p className="mt-4 text-gray-600">
// // // // //             For example, a confusion matrix might look like this: 
// // // // //         </p>
// // // // //         <p className="mt-4 text-gray-600">
// // // // //             Here's a specific one for the BiLSTM model: 
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Machine Learning Models Results */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // //           Machine Learning Models Results
// // // // //         </h2>
// // // // //         <table className="min-w-full border-collapse text-sm">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-100">
// // // // //               <th className="border-b p-3">Model</th>
// // // // //               <th className="border-b p-3">Method</th>
// // // // //               <th className="border-b p-3">Train Accuracy</th>
// // // // //               <th className="border-b p-3">Test Accuracy</th>
// // // // //               <th className="border-b p-3">Precision</th>
// // // // //               <th className="border-b p-3">Recall</th>
// // // // //               <th className="border-b p-3">F1 Score</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {mlModelComparison.map((row, i) => (
// // // // //               <tr key={i} className="hover:bg-gray-50">
// // // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // // //                 <td className="border-b p-3">{row.Method}</td>
// // // // //                 <td className="border-b p-3">{row["Train Accuracy"]}</td>
// // // // //                 <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>

// // // // //       {/* Deep Learning Models Results */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // //           Deep Learning Models Results
// // // // //         </h2>
// // // // //         <table className="min-w-full border-collapse text-sm">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-100">
// // // // //               <th className="border-b p-3">Model</th>
// // // // //               <th className="border-b p-3">Method</th>
// // // // //               <th className="border-b p-3">Accuracy</th>
// // // // //               <th className="border-b p-3">Precision</th>
// // // // //               <th className="border-b p-3">Recall</th>
// // // // //               <th className="border-b p-3">F1 Score</th>
// // // // //               <th className="border-b p-3">MSE</th>
// // // // //               <th className="border-b p-3">MAE</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {dlModelsResults.map((row, i) => (
// // // // //               <tr key={i} className="hover:bg-gray-50">
// // // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // // //                 <td className="border-b p-3">{row.Method}</td>
// // // // //                 <td className="border-b p-3">{row.Accuracy}</td>
// // // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // // //                 <td className="border-b p-3">{row.MSE}</td>
// // // // //                 <td className="border-b p-3">{row.MAE}</td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>

// // // // //       {/* Total Features */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Features</h2>
// // // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // // //           {totalFeatures.map((feature, index) => (
// // // // //             <li key={index} className="mb-1">{feature}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Selected Features */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Features (SELECTKBEST)</h2>
// // // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // // //           {selectedFeatures.map((feature, index) => (
// // // // //             <li key={index} className="mb-1">{feature}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default SpectrogramsPage;

// // // // // import React, { useState, useRef } from "react";
// // // // // // Link to the CSS file

// // // // // // ML Models Results
// // // // // const mlModelComparison = [
// // // // //   { Model: "Random Forest", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.964, Precision: 0.964, Recall: 0.964, "F1 Score": 0.964 },
// // // // //   { Model: "Gradient Boosting", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.94, Precision: 0.94, Recall: 0.94, "F1 Score": 0.94 },
// // // // //   { Model: "Support Vector Machine", Method: "PCA", "Train Accuracy": 0.986, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "K-Nearest Neighbors", Method: "PCA", "Train Accuracy": 0.944, "Test Accuracy": 0.922, Precision: 0.922, Recall: 0.922, "F1 Score": 0.922 },
// // // // //   { Model: "Logistic Regression", Method: "PCA", "Train Accuracy": 0.962, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "Random Forest", Method: "SELECTKBEST", "Train Accuracy": 1.0, "Test Accuracy": 0.832, Precision: 0.833, Recall: 0.832, "F1 Score": 0.832 },
// // // // //   { Model: "Gradient Boosting", Method: "SELECTKBEST", "Train Accuracy": 0.985, "Test Accuracy": 0.934, Precision: 0.934, Recall: 0.934, "F1 Score": 0.934 },
// // // // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Train Accuracy": 0.998, "Test Accuracy": 0.826, Precision: 0.838, Recall: 0.826, "F1 Score": 0.824 },
// // // // //   { Model: "K-Nearest Neighbors", Method: "SELECTKBEST", "Train Accuracy": 0.935, "Test Accuracy": 0.892, Precision: 0.893, Recall: 0.892, "F1 Score": 0.892 },
// // // // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Train Accuracy": 0.964, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // //   { Model: "Random Forest", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "Gradient Boosting", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // //   { Model: "Support Vector Machine", Method: "None", "Train Accuracy": 0.994, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // //   { Model: "K-Nearest Neighbors", Method: "None", "Train Accuracy": 0.969, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // // //   { Model: "Logistic Regression", Method: "None", "Train Accuracy": 0.972, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // // ];

// // // // // // Deep Learning Models Results
// // // // // const dlModelsResults = [
// // // // //   { Model: "MLP", Method: "pca", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, Precision: 0.972, Recall: 0.97, "F1 Score": 0.97, MSE: 0.03, MAE: 0.03 },
// // // // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, Precision: 0.799, Recall: 0.796, "F1 Score": 0.795, MSE: 0.204, MAE: 0.204 },
// // // // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, Precision: 0.843, Recall: 0.838, "F1 Score": 0.837, MSE: 0.162, MAE: 0.162 },
// // // // //   { Model: "MLP", Method: "selectkbest", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, Precision: 0.988, Recall: 0.988, "F1 Score": 0.988, MSE: 0.012, MAE: 0.012 },
// // // // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, Precision: 0.86, Recall: 0.856, "F1 Score": 0.856, MSE: 0.144, MAE: 0.144 },
// // // // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, Precision: 0.765, Recall: 0.754, "F1 Score": 0.752, MSE: 0.246, MAE: 0.246 },
// // // // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, Precision: 0.85, Recall: 0.844, "F1 Score": 0.843, MSE: 0.156, MAE: 0.156 },
// // // // //   { Model: "MLP", Method: "none", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // // //   { Model: "CNN", Method: "none", Accuracy: 0.976, Precision: 0.96, Recall: 0.976, "F1 Score": 0.976, MSE: 0.024, MAE: 0.024 },
// // // // //   { Model: "LSTM", Method: "none", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // // //   { Model: "GRU", Method: "none", Accuracy: 0.832, Precision: 0.834, Recall: 0.832, "F1 Score": 0.832, MSE: 0.168, MAE: 0.168 },
// // // // //   { Model: "BiLSTM", Method: "none", Accuracy: 0.898, Precision: 0.873, Recall: 0.868, "F1 Score": 0.867, MSE: 0.132, MAE: 0.132 },
// // // // // ];
// // // // // const totalFeatures = [
// // // // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local",
// // // // //   "jitter_abs", "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local",
// // // // //   "shimmer_db", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0",
// // // // //   "mfcc1", "mfcc2", "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8",
// // // // //   "mfcc9", "mfcc10", "mfcc11", "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3",
// // // // //   "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9",
// // // // //   "mel_mean10", "mel_mean11", "mel_mean12", "mel_mean13", "mel_mean14",
// // // // //   "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean18", "mel_mean19",
// // // // //   "mel_mean20", "mel_mean21", "mel_mean22", "mel_mean23", "mel_mean24",
// // // // //   "mel_mean25", "mel_mean26", "mel_mean27", "mel_mean28", "mel_mean29",
// // // // //   "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34",
// // // // //   "mel_mean35", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // // //   "mel_std0", "mel_std1", "mel_std2", "mel_std3", "mel_std4", "mel_std5",
// // // // //   "mel_std6", "mel_std7", "mel_std8", "mel_std9", "mel_std10", "mel_std11",
// // // // //   "mel_std12", "mel_std13", "mel_std14", "mel_std15", "mel_std16", "mel_std17",
// // // // //   "mel_std18", "mel_std19", "mel_std20", "mel_std21", "mel_std22", "mel_std23",
// // // // //   "mel_std24", "mel_std25", "mel_std26", "mel_std27", "mel_std28", "mel_std29",
// // // // //   "mel_std30", "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35",
// // // // //   "mel_std36", "mel_std37", "mel_std38", "mel_std39", "label"
// // // // // ];

// // // // // const selectedFeatures = [
// // // // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr",
// // // // //   "mfcc8", "mfcc9", "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6",
// // // // //   "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean15", "mel_mean16",
// // // // //   "mel_mean17", "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33",
// // // // //   "mel_mean34", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // // //   "mel_std1", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // // // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37",
// // // // //   "mel_std38", "mel_std39"
// // // // // ];

// // // // // function SpectrogramsPage() {
// // // // //   const [file, setFile] = useState(null);
// // // // //   const [results, setResults] = useState(null);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [isRecording, setIsRecording] = useState(false);
// // // // //   const mediaRecorderRef = useRef(null);
// // // // //   const audioChunksRef = useRef([]);

// // // // //   const [confusionMatrixImage, setConfusionMatrixImage] = useState(null);

// // // // //   const handleStartRecording = async () => {
// // // // //     try {
// // // // //         setFile(null); // Clear previous file
// // // // //         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

// // // // //         // Specify the MIME type here
// // // // //         mediaRecorderRef.current = new MediaRecorder(stream);
     

// // // // //         audioChunksRef.current = [];
// // // // //         mediaRecorderRef.current.ondataavailable = (event) => {
// // // // //             if (event.data.size > 0) {
// // // // //                 audioChunksRef.current.push(event.data);
// // // // //             }
// // // // //         };
// // // // //         mediaRecorderRef.current.onstop = () => {
// // // // //             // Get the actual MIME type from the MediaRecorder
// // // // //             const mimeType = mediaRecorderRef.current.mimeType;
// // // // //             const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
// // // // //             setFile(audioBlob);
// // // // //             stream.getTracks().forEach((track) => track.stop());
// // // // //         };
// // // // //         mediaRecorderRef.current.start();
// // // // //         setIsRecording(true);
// // // // //         setError(null);
// // // // //     } catch (err) {
// // // // //         setError("Error accessing microphone: " + err.message);
// // // // //         console.error("Recording error:", err);
// // // // //     }
// // // // // };

// // // // //   const handleStopRecording = () => {
// // // // //     if (mediaRecorderRef.current) {
// // // // //       mediaRecorderRef.current.stop();
// // // // //       setIsRecording(false);
// // // // //     }
// // // // //   };

// // // // //   const handleUpload = async () => {
// // // // //     if (!file) {
// // // // //       setError("Please select a file or record audio first!");
// // // // //       return;
// // // // //     }
// // // // //     setError(null);
// // // // //     setLoading(true);

// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       formData.append("file", file, "audio.wav");

// // // // //       const res = await fetch("http://localhost:5000/predict", {
// // // // //         method: "POST",
// // // // //         body: formData,
// // // // //       });

// // // // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // // // //       const data = await res.json();
// // // // //       setResults(data);
// // // // //       if (data.confusionMatrix) {
// // // // //         setConfusionMatrixImage(data.confusionMatrix);
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError(err.message || "Something went wrong");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-10 bg-gray-100 min-h-screen">
// // // // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // // // //         Parkinson Prediction Results
// // // // //       </h1>

// // // // //       {/* Upload/Record Section */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex flex-col sm:flex-row items-center gap-4">
// // // // //         <input
// // // // //           type="file"
// // // // //           accept="audio/wav"
// // // // //           onChange={(e) => {
// // // // //             setFile(e.target.files?.[0] || null);
// // // // //             if (isRecording) {
// // // // //               handleStopRecording();
// // // // //             }
// // // // //           }}
// // // // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // // // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // // // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // // // //         />

// // // // //         <div className="text-gray-500">OR</div>

// // // // //         <div className="flex gap-4">
// // // // //           <button
// // // // //             onClick={isRecording ? handleStopRecording : handleStartRecording}
// // // // //             className={`px-6 py-2 rounded-full font-bold text-white ${
// // // // //               isRecording
// // // // //                 ? "bg-red-600 hover:bg-red-700"
// // // // //                 : "bg-green-600 hover:bg-green-700"
// // // // //             } shadow-md`}
// // // // //             disabled={loading}
// // // // //           >
// // // // //             {isRecording ? "Stop Recording" : "Start Recording"}
// // // // //           </button>
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={handleUpload}
// // // // //           disabled={loading || !file}
// // // // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // // // //             loading || !file
// // // // //               ? "bg-gray-400"
// // // // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // // //           }`}
// // // // //         >
// // // // //           {loading ? "Uploading..." : "Predict"}
// // // // //         </button>
// // // // //       </div>

// // // // //       {error && (
// // // // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // // // //       )}

// // // // //       {/* Prediction Results */}
// // // // //       {results && (
// // // // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Predictions</h2>
// // // // //           <table className="min-w-full border-collapse text-sm">
// // // // //             <thead>
// // // // //               <tr className="bg-gray-100">
// // // // //                 <th className="border-b p-3 text-left">Model</th>
// // // // //                 <th className="border-b p-3 text-left">Prediction</th>
// // // // //                 <th className="border-b p-3 text-left">Score</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {results.chunks[0] &&
// // // // //                 Object.entries(results.chunks[0].predictions).map(
// // // // //                   ([model, pred]) => (
// // // // //                     <tr key={model} className="hover:bg-gray-50">
// // // // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // // // //                       <td className="border-b p-3">{pred.label}</td>
// // // // //                       <td className="border-b p-3">
// // // // //                         {pred.score?.toFixed(4) ?? "—"}
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   )
// // // // //                 )}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       )}
// // // // //       {/* Confusion Matrix Display */}
// // // // //       {confusionMatrixImage && (
// // // // //         <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Confusion Matrix</h2>
// // // // //           <div className="confusion-matrix-container">
// // // // //             <img 
// // // // //               src={`data:image/png;base64,${confusionMatrixImage}`} 
// // // // //               alt="Confusion Matrix" 
// // // // //               className="confusion-matrix-img"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Machine Learning Models Results */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // //           Machine Learning Models Results
// // // // //         </h2>
// // // // //         <table className="min-w-full border-collapse text-sm">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-100">
// // // // //               <th className="border-b p-3">Model</th>
// // // // //               <th className="border-b p-3">Method</th>
// // // // //               <th className="border-b p-3">Train Accuracy</th>
// // // // //               <th className="border-b p-3">Test Accuracy</th>
// // // // //               <th className="border-b p-3">Precision</th>
// // // // //               <th className="border-b p-3">Recall</th>
// // // // //               <th className="border-b p-3">F1 Score</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {mlModelComparison.map((row, i) => (
// // // // //               <tr key={i} className="hover:bg-gray-50">
// // // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // // //                 <td className="border-b p-3">{row.Method}</td>
// // // // //                 <td className="border-b p-3">{row["Train Accuracy"]}</td>
// // // // //                 <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>

// // // // //       {/* Deep Learning Models Results */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // // //           Deep Learning Models Results
// // // // //         </h2>
// // // // //         <table className="min-w-full border-collapse text-sm">
// // // // //           <thead>
// // // // //             <tr className="bg-gray-100">
// // // // //               <th className="border-b p-3">Model</th>
// // // // //               <th className="border-b p-3">Method</th>
// // // // //               <th className="border-b p-3">Accuracy</th>
// // // // //               <th className="border-b p-3">Precision</th>
// // // // //               <th className="border-b p-3">Recall</th>
// // // // //               <th className="border-b p-3">F1 Score</th>
// // // // //               <th className="border-b p-3">MSE</th>
// // // // //               <th className="border-b p-3">MAE</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {dlModelsResults.map((row, i) => (
// // // // //               <tr key={i} className="hover:bg-gray-50">
// // // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // // //                 <td className="border-b p-3">{row.Method}</td>
// // // // //                 <td className="border-b p-3">{row.Accuracy}</td>
// // // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // // //                 <td className="border-b p-3">{row.MSE}</td>
// // // // //                 <td className="border-b p-3">{row.MAE}</td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>

// // // // //       {/* Total Features */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Features</h2>
// // // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // // //           {totalFeatures.map((feature, index) => (
// // // // //             <li key={index} className="mb-1">{feature}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Selected Features */}
// // // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Features (SELECTKBEST)</h2>
// // // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // // //           {selectedFeatures.map((feature, index) => (
// // // // //             <li key={index} className="mb-1">{feature}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default SpectrogramsPage;

// // // // import React, { useState, useRef } from "react";

// // // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // // 1. Import your local image assets.
// // // // // Make sure these paths are correct relative to the location of this file.
// // // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // // import gruGraph from "../assets/plots/GRU.png";
// // // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // // ML Models Results
// // // // const mlModelComparison = [
// // // //   { Model: "Random Forest", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.964, Precision: 0.964, Recall: 0.964, "F1 Score": 0.964 },
// // // //   { Model: "Gradient Boosting", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.94, Precision: 0.94, Recall: 0.94, "F1 Score": 0.94 },
// // // //   { Model: "Support Vector Machine", Method: "PCA", "Train Accuracy": 0.986, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "K-Nearest Neighbors", Method: "PCA", "Train Accuracy": 0.944, "Test Accuracy": 0.922, Precision: 0.922, Recall: 0.922, "F1 Score": 0.922 },
// // // //   { Model: "Logistic Regression", Method: "PCA", "Train Accuracy": 0.962, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "Random Forest", Method: "SELECTKBEST", "Train Accuracy": 1.0, "Test Accuracy": 0.832, Precision: 0.833, Recall: 0.832, "F1 Score": 0.832 },
// // // //   { Model: "Gradient Boosting", Method: "SELECTKBEST", "Train Accuracy": 0.985, "Test Accuracy": 0.934, Precision: 0.934, Recall: 0.934, "F1 Score": 0.934 },
// // // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Train Accuracy": 0.998, "Test Accuracy": 0.826, Precision: 0.838, Recall: 0.826, "F1 Score": 0.824 },
// // // //   { Model: "K-Nearest Neighbors", Method: "SELECTKBEST", "Train Accuracy": 0.935, "Test Accuracy": 0.892, Precision: 0.893, Recall: 0.892, "F1 Score": 0.892 },
// // // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Train Accuracy": 0.964, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // //   { Model: "Random Forest", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "Gradient Boosting", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // //   { Model: "Support Vector Machine", Method: "None", "Train Accuracy": 0.994, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // //   { Model: "K-Nearest Neighbors", Method: "None", "Train Accuracy": 0.969, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "Logistic Regression", Method: "None", "Train Accuracy": 0.972, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // ];

// // // // // Deep Learning Models Results
// // // // const dlModelsResults = [
// // // //   { Model: "MLP", Method: "pca", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, Precision: 0.972, Recall: 0.97, "F1 Score": 0.97, MSE: 0.03, MAE: 0.03 },
// // // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, Precision: 0.799, Recall: 0.796, "F1 Score": 0.795, MSE: 0.204, MAE: 0.204 },
// // // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, Precision: 0.843, Recall: 0.838, "F1 Score": 0.837, MSE: 0.162, MAE: 0.162 },
// // // //   { Model: "MLP", Method: "selectkbest", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, Precision: 0.988, Recall: 0.988, "F1 Score": 0.988, MSE: 0.012, MAE: 0.012 },
// // // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, Precision: 0.86, Recall: 0.856, "F1 Score": 0.856, MSE: 0.144, MAE: 0.144 },
// // // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, Precision: 0.765, Recall: 0.754, "F1 Score": 0.752, MSE: 0.246, MAE: 0.246 },
// // // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, Precision: 0.85, Recall: 0.844, "F1 Score": 0.843, MSE: 0.156, MAE: 0.156 },
// // // //   { Model: "MLP", Method: "none", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // //   { Model: "CNN", Method: "none", Accuracy: 0.976, Precision: 0.96, Recall: 0.976, "F1 Score": 0.976, MSE: 0.024, MAE: 0.024 },
// // // //   { Model: "LSTM", Method: "none", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // //   { Model: "GRU", Method: "none", Accuracy: 0.832, Precision: 0.834, Recall: 0.832, "F1 Score": 0.832, MSE: 0.168, MAE: 0.168 },
// // // //   { Model: "BiLSTM", Method: "none", Accuracy: 0.898, Precision: 0.873, Recall: 0.868, "F1 Score": 0.867, MSE: 0.132, MAE: 0.132 },
// // // // ];
// // // // const totalFeatures = [
// // // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local",
// // // //   "jitter_abs", "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local",
// // // //   "shimmer_db", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0",
// // // //   "mfcc1", "mfcc2", "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8",
// // // //   "mfcc9", "mfcc10", "mfcc11", "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3",
// // // //   "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9",
// // // //   "mel_mean10", "mel_mean11", "mel_mean12", "mel_mean13", "mel_mean14",
// // // //   "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean18", "mel_mean19",
// // // //   "mel_mean20", "mel_mean21", "mel_mean22", "mel_mean23", "mel_mean24",
// // // //   "mel_mean25", "mel_mean26", "mel_mean27", "mel_mean28", "mel_mean29",
// // // //   "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34",
// // // //   "mel_mean35", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // //   "mel_std0", "mel_std1", "mel_std2", "mel_std3", "mel_std4", "mel_std5",
// // // //   "mel_std6", "mel_std7", "mel_std8", "mel_std9", "mel_std10", "mel_std11",
// // // //   "mel_std12", "mel_std13", "mel_std14", "mel_std15", "mel_std16", "mel_std17",
// // // //   "mel_std18", "mel_std19", "mel_std20", "mel_std21", "mel_std22", "mel_std23",
// // // //   "mel_std24", "mel_std25", "mel_std26", "mel_std27", "mel_std28", "mel_std29",
// // // //   "mel_std30", "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35",
// // // //   "mel_std36", "mel_std37", "mel_std38", "mel_std39", "label"
// // // // ];

// // // // const selectedFeatures = [
// // // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr",
// // // //   "mfcc8", "mfcc9", "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6",
// // // //   "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean15", "mel_mean16",
// // // //   "mel_mean17", "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33",
// // // //   "mel_mean34", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // //   "mel_std1", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37",
// // // //   "mel_std38", "mel_std39"
// // // // ];
// // // // // A component to display a single model's graph
// // // // const ModelGraphCard = ({ title, graphImage }) => (
// // // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // // //     <img
// // // //       src={graphImage}
// // // //       alt={`${title} Performance Graphs`}
// // // //       className="w-full h-auto rounded-lg"
// // // //     />
// // // //   </div>
// // // // );

// // // // function SpectrogramsPage() {
// // // //   const [file, setFile] = useState(null);
// // // //   const [results, setResults] = useState(null);
// // // //   const [error, setError] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [isRecording, setIsRecording] = useState(false);
// // // //   const mediaRecorderRef = useRef(null);
// // // //   const audioChunksRef = useRef([]);

// // // //   const [confusionMatrixImage, setConfusionMatrixImage] = useState(null);

// // // //   const handleStartRecording = async () => {
// // // //     try {
// // // //       setFile(null); // Clear previous file
// // // //       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

// // // //       mediaRecorderRef.current = new MediaRecorder(stream);
      
// // // //       audioChunksRef.current = [];
// // // //       mediaRecorderRef.current.ondataavailable = (event) => {
// // // //         if (event.data.size > 0) {
// // // //           audioChunksRef.current.push(event.data);
// // // //         }
// // // //       };
// // // //       mediaRecorderRef.current.onstop = () => {
// // // //         const mimeType = mediaRecorderRef.current.mimeType;
// // // //         const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
// // // //         setFile(audioBlob);
// // // //         stream.getTracks().forEach((track) => track.stop());
// // // //       };
// // // //       mediaRecorderRef.current.start();
// // // //       setIsRecording(true);
// // // //       setError(null);
// // // //     } catch (err) {
// // // //       setError("Error accessing microphone: " + err.message);
// // // //       console.error("Recording error:", err);
// // // //     }
// // // //   };

// // // //   const handleStopRecording = () => {
// // // //     if (mediaRecorderRef.current) {
// // // //       mediaRecorderRef.current.stop();
// // // //       setIsRecording(false);
// // // //     }
// // // //   };

// // // //   const handleUpload = async () => {
// // // //     if (!file) {
// // // //       setError("Please select a file or record audio first!");
// // // //       return;
// // // //     }
// // // //     setError(null);
// // // //     setLoading(true);

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append("file", file, "audio.wav");

// // // //       const res = await fetch("http://localhost:5000/predict", {
// // // //         method: "POST",
// // // //         body: formData,
// // // //       });

// // // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // // //       const data = await res.json();
// // // //       setResults(data);
// // // //       if (data.confusionMatrix) {
// // // //         setConfusionMatrixImage(data.confusionMatrix);
// // // //       }
// // // //     } catch (err) {
// // // //       setError(err.message || "Something went wrong");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-10 bg-gray-100 min-h-screen">
// // // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // // //         Parkinson Prediction Results
// // // //       </h1>

// // // //       {/* Upload/Record Section */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex flex-col sm:flex-row items-center gap-4">
// // // //         <input
// // // //           type="file"
// // // //           accept="audio/wav"
// // // //           onChange={(e) => {
// // // //             setFile(e.target.files?.[0] || null);
// // // //             if (isRecording) {
// // // //               handleStopRecording();
// // // //             }
// // // //           }}
// // // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // // //         />

// // // //         <div className="text-gray-500">OR</div>

// // // //         <div className="flex gap-4">
// // // //           <button
// // // //             onClick={isRecording ? handleStopRecording : handleStartRecording}
// // // //             className={`px-6 py-2 rounded-full font-bold text-white ${
// // // //               isRecording
// // // //                 ? "bg-red-600 hover:bg-red-700"
// // // //                 : "bg-green-600 hover:bg-green-700"
// // // //             } shadow-md`}
// // // //             disabled={loading}
// // // //           >
// // // //             {isRecording ? "Stop Recording" : "Start Recording"}
// // // //           </button>
// // // //         </div>

// // // //         <button
// // // //           onClick={handleUpload}
// // // //           disabled={loading || !file}
// // // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // // //             loading || !file
// // // //               ? "bg-gray-400"
// // // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // //           }`}
// // // //         >
// // // //           {loading ? "Uploading..." : "Predict"}
// // // //         </button>
// // // //       </div>

// // // //       {error && (
// // // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // // //       )}

// // // //       {/* Prediction Results */}
// // // //       {results && (
// // // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Predictions</h2>
// // // //           <table className="min-w-full border-collapse text-sm">
// // // //             <thead>
// // // //               <tr className="bg-gray-100">
// // // //                 <th className="border-b p-3 text-left">Model</th>
// // // //                 <th className="border-b p-3 text-left">Prediction</th>
// // // //                 <th className="border-b p-3 text-left">Score</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {results.chunks[0] &&
// // // //                 Object.entries(results.chunks[0].predictions).map(
// // // //                   ([model, pred]) => (
// // // //                     <tr key={model} className="hover:bg-gray-50">
// // // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // // //                       <td className="border-b p-3">{pred.label}</td>
// // // //                       <td className="border-b p-3">
// // // //                         {pred.score?.toFixed(4) ?? "—"}
// // // //                       </td>
// // // //                     </tr>
// // // //                   )
// // // //                 )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}
// // // //       {/* Confusion Matrix Display */}
// // // //       {confusionMatrixImage && (
// // // //         <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Confusion Matrix</h2>
// // // //           <div className="confusion-matrix-container">
// // // //             <img 
// // // //               src={`data:image/png;base64,${confusionMatrixImage}`} 
// // // //               alt="Confusion Matrix" 
// // // //               className="confusion-matrix-img"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Machine Learning Models Results */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //           Machine Learning Models Results
// // // //         </h2>
// // // //         <table className="min-w-full border-collapse text-sm">
// // // //           <thead>
// // // //             <tr className="bg-gray-100">
// // // //               <th className="border-b p-3">Model</th>
// // // //               <th className="border-b p-3">Method</th>
// // // //               <th className="border-b p-3">Train Accuracy</th>
// // // //               <th className="border-b p-3">Test Accuracy</th>
// // // //               <th className="border-b p-3">Precision</th>
// // // //               <th className="border-b p-3">Recall</th>
// // // //               <th className="border-b p-3">F1 Score</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {mlModelComparison.map((row, i) => (
// // // //               <tr key={i} className="hover:bg-gray-50">
// // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // //                 <td className="border-b p-3">{row.Method}</td>
// // // //                 <td className="border-b p-3">{row["Train Accuracy"]}</td>
// // // //                 <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {/* Deep Learning Models Results */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //           Deep Learning Models Results
// // // //         </h2>
// // // //         <table className="min-w-full border-collapse text-sm">
// // // //           <thead>
// // // //             <tr className="bg-gray-100">
// // // //               <th className="border-b p-3">Model</th>
// // // //               <th className="border-b p-3">Method</th>
// // // //               <th className="border-b p-3">Accuracy</th>
// // // //               <th className="border-b p-3">Precision</th>
// // // //               <th className="border-b p-3">Recall</th>
// // // //               <th className="border-b p-3">F1 Score</th>
// // // //               <th className="border-b p-3">MSE</th>
// // // //               <th className="border-b p-3">MAE</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {dlModelsResults.map((row, i) => (
// // // //               <tr key={i} className="hover:bg-gray-50">
// // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // //                 <td className="border-b p-3">{row.Method}</td>
// // // //                 <td className="border-b p-3">{row.Accuracy}</td>
// // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // //                 <td className="border-b p-3">{row.MSE}</td>
// // // //                 <td className="border-b p-3">{row.MAE}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {/* Total Features */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Features</h2>
// // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // //           {totalFeatures.map((feature, index) => (
// // // //             <li key={index} className="mb-1">{feature}</li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>

// // // //       {/* Selected Features */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Features (SELECTKBEST)</h2>
// // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // //           {selectedFeatures.map((feature, index) => (
// // // //             <li key={index} className="mb-1">{feature}</li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>

// // // //       {/* Model Graphs Section */}
// // // //       <div className="space-y-6">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //           Model Performance Graphs
// // // //         </h2>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           <ModelGraphCard
// // // //             title="CNN-LSTM Performance"
// // // //             graphImage={cnnLstmGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="BiLSTM Performance"
// // // //             graphImage={bilstmGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="MobileNetV2 Performance"
// // // //             graphImage={mobilenetGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="ResNet50 Performance"
// // // //             graphImage={resnetGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="GRU Performance"
// // // //             graphImage={gruGraph}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default SpectrogramsPage;

// // // // import React, { useState, useRef } from "react";
// // // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // // 1. Import your local image assets.
// // // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // // import gruGraph from "../assets/plots/GRU.png";
// // // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // // ML Models Results
// // // // const mlModelComparison = [
// // // //   { Model: "Random Forest", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.964, Precision: 0.964, Recall: 0.964, "F1 Score": 0.964 },
// // // //   { Model: "Gradient Boosting", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.94, Precision: 0.94, Recall: 0.94, "F1 Score": 0.94 },
// // // //   { Model: "Support Vector Machine", Method: "PCA", "Train Accuracy": 0.986, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "K-Nearest Neighbors", Method: "PCA", "Train Accuracy": 0.944, "Test Accuracy": 0.922, Precision: 0.922, Recall: 0.922, "F1 Score": 0.922 },
// // // //   { Model: "Logistic Regression", Method: "PCA", "Train Accuracy": 0.962, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "Random Forest", Method: "SELECTKBEST", "Train Accuracy": 1.0, "Test Accuracy": 0.832, Precision: 0.833, Recall: 0.832, "F1 Score": 0.832 },
// // // //   { Model: "Gradient Boosting", Method: "SELECTKBEST", "Train Accuracy": 0.985, "Test Accuracy": 0.934, Precision: 0.934, Recall: 0.934, "F1 Score": 0.934 },
// // // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Train Accuracy": 0.998, "Test Accuracy": 0.826, Precision: 0.838, Recall: 0.826, "F1 Score": 0.824 },
// // // //   { Model: "K-Nearest Neighbors", Method: "SELECTKBEST", "Train Accuracy": 0.935, "Test Accuracy": 0.892, Precision: 0.893, Recall: 0.892, "F1 Score": 0.892 },
// // // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Train Accuracy": 0.964, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // //   { Model: "Random Forest", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "Gradient Boosting", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // //   { Model: "Support Vector Machine", Method: "None", "Train Accuracy": 0.994, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // //   { Model: "K-Nearest Neighbors", Method: "None", "Train Accuracy": 0.969, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // // //   { Model: "Logistic Regression", Method: "None", "Train Accuracy": 0.972, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // // ];

// // // // // Deep Learning Models Results
// // // // const dlModelsResults = [
// // // //   { Model: "MLP", Method: "pca", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, Precision: 0.972, Recall: 0.97, "F1 Score": 0.97, MSE: 0.03, MAE: 0.03 },
// // // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, Precision: 0.799, Recall: 0.796, "F1 Score": 0.795, MSE: 0.204, MAE: 0.204 },
// // // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, Precision: 0.843, Recall: 0.838, "F1 Score": 0.837, MSE: 0.162, MAE: 0.162 },
// // // //   { Model: "MLP", Method: "selectkbest", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, Precision: 0.988, Recall: 0.988, "F1 Score": 0.988, MSE: 0.012, MAE: 0.012 },
// // // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, Precision: 0.86, Recall: 0.856, "F1 Score": 0.856, MSE: 0.144, MAE: 0.144 },
// // // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, Precision: 0.765, Recall: 0.754, "F1 Score": 0.752, MSE: 0.246, MAE: 0.246 },
// // // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, Precision: 0.85, Recall: 0.844, "F1 Score": 0.843, MSE: 0.156, MAE: 0.156 },
// // // //   { Model: "MLP", Method: "none", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // // //   { Model: "CNN", Method: "none", Accuracy: 0.976, Precision: 0.96, Recall: 0.976, "F1 Score": 0.976, MSE: 0.024, MAE: 0.024 },
// // // //   { Model: "LSTM", Method: "none", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // // //   { Model: "GRU", Method: "none", Accuracy: 0.832, Precision: 0.834, Recall: 0.832, "F1 Score": 0.832, MSE: 0.168, MAE: 0.168 },
// // // //   { Model: "BiLSTM", Method: "none", Accuracy: 0.898, Precision: 0.873, Recall: 0.868, "F1 Score": 0.867, MSE: 0.132, MAE: 0.132 },
// // // // ];
// // // // const totalFeatures = [
// // // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local",
// // // //   "jitter_abs", "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local",
// // // //   "shimmer_db", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0",
// // // //   "mfcc1", "mfcc2", "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8",
// // // //   "mfcc9", "mfcc10", "mfcc11", "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3",
// // // //   "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9",
// // // //   "mel_mean10", "mel_mean11", "mel_mean12", "mel_mean13", "mel_mean14",
// // // //   "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean18", "mel_mean19",
// // // //   "mel_mean20", "mel_mean21", "mel_mean22", "mel_mean23", "mel_mean24",
// // // //   "mel_mean25", "mel_mean26", "mel_mean27", "mel_mean28", "mel_mean29",
// // // //   "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34",
// // // //   "mel_mean35", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // //   "mel_std0", "mel_std1", "mel_std2", "mel_std3", "mel_std4", "mel_std5",
// // // //   "mel_std6", "mel_std7", "mel_std8", "mel_std9", "mel_std10", "mel_std11",
// // // //   "mel_std12", "mel_std13", "mel_std14", "mel_std15", "mel_std16", "mel_std17",
// // // //   "mel_std18", "mel_std19", "mel_std20", "mel_std21", "mel_std22", "mel_std23",
// // // //   "mel_std24", "mel_std25", "mel_std26", "mel_std27", "mel_std28", "mel_std29",
// // // //   "mel_std30", "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35",
// // // //   "mel_std36", "mel_std37", "mel_std38", "mel_std39", "label"
// // // // ];

// // // // const selectedFeatures = [
// // // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr",
// // // //   "mfcc8", "mfcc9", "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6",
// // // //   "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean15", "mel_mean16",
// // // //   "mel_mean17", "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33",
// // // //   "mel_mean34", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // // //   "mel_std1", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37",
// // // //   "mel_std38", "mel_std39"
// // // // ];

// // // // const confusionMatricesData = {
// // // //   'BiLSTM ': { TP: 80, TN: 85, FP: 10, FN: 5 },
// // // //   'BiGRU': { TP: 75, TN: 82, FP: 13, FN: 8 },
// // // //   'CNN': { TP: 95, TN: 92, FP: 8, FN: 5 },
// // // //   'MLP ': { TP: 98, TN: 97, FP: 2, FN: 3 },
// // // //   'Logistic Regression': { TP: 90, TN: 88, FP: 12, FN: 10 },
// // // //   'Gradient Boosting ': { TP: 85, TN: 87, FP: 13, FN: 15 },
// // // //   'K-Nearest Neighbors': { TP: 82, TN: 80, FP: 18, FN: 20 },
// // // //   'Random Forest': { TP: 88, TN: 85, FP: 15, FN: 12 },
// // // //   'Support Vector Machine': { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // // };

// // // // // A component to display a single model's graph
// // // // const ModelGraphCard = ({ title, graphImage }) => (
// // // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // // //     <img
// // // //       src={graphImage}
// // // //       alt={`${title} Performance Graphs`}
// // // //       className="w-full h-auto rounded-lg"
// // // //     />
// // // //   </div>
// // // // );

// // // // function SpectrogramsPage() {
// // // //   const [file, setFile] = useState(null);
// // // //   const [results, setResults] = useState(null);
// // // //   const [error, setError] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [isRecording, setIsRecording] = useState(false);
// // // //   const mediaRecorderRef = useRef(null);
// // // //   const audioChunksRef = useRef([]);
// // // //   const [confusionMatrixImage, setConfusionMatrixImage] = useState(null);

// // // //   const handleStartRecording = async () => {
// // // //     try {
// // // //       setFile(null); // Clear previous file
// // // //       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

// // // //       mediaRecorderRef.current = new MediaRecorder(stream);

// // // //       audioChunksRef.current = [];
// // // //       mediaRecorderRef.current.ondataavailable = (event) => {
// // // //         if (event.data.size > 0) {
// // // //           audioChunksRef.current.push(event.data);
// // // //         }
// // // //       };
// // // //       mediaRecorderRef.current.onstop = () => {
// // // //         const mimeType = mediaRecorderRef.current.mimeType;
// // // //         const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
// // // //         setFile(audioBlob);
// // // //         stream.getTracks().forEach((track) => track.stop());
// // // //       };
// // // //       mediaRecorderRef.current.start();
// // // //       setIsRecording(true);
// // // //       setError(null);
// // // //     } catch (err) {
// // // //       setError("Error accessing microphone: " + err.message);
// // // //       console.error("Recording error:", err);
// // // //     }
// // // //   };

// // // //   const handleStopRecording = () => {
// // // //     if (mediaRecorderRef.current) {
// // // //       mediaRecorderRef.current.stop();
// // // //       setIsRecording(false);
// // // //     }
// // // //   };

// // // //   const handleUpload = async () => {
// // // //     if (!file) {
// // // //       setError("Please select a file or record audio first!");
// // // //       return;
// // // //     }
// // // //     setError(null);
// // // //     setLoading(true);

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append("file", file, "audio.wav");

// // // //       const res = await fetch("http://localhost:5000/predict", {
// // // //         method: "POST",
// // // //         body: formData,
// // // //       });

// // // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // // //       const data = await res.json();
// // // //       setResults(data);
// // // //       if (data.confusionMatrix) {
// // // //         setConfusionMatrixImage(data.confusionMatrix);
// // // //       }
// // // //     } catch (err) {
// // // //       setError(err.message || "Something went wrong");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-10 bg-gray-100 min-h-screen">
// // // //       <style jsx>{`
// // // //         .confusion-matrix-container {
// // // //           border: 2px solid #e2e8f0;
// // // //           border-radius: 0.75rem;
// // // //           padding: 1rem;
// // // //           display: flex;
// // // //           justify-content: center;
// // // //           align-items: center;
// // // //         }
// // // //         .confusion-matrix-img {
// // // //           max-width: 100%;
// // // //           height: auto;
// // // //         }
// // // //       `}</style>
// // // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // // //         Parkinson Prediction Results
// // // //       </h1>

// // // //       {/* Upload/Record Section */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex flex-col sm:flex-row items-center gap-4">
// // // //         <input
// // // //           type="file"
// // // //           accept="audio/wav"
// // // //           onChange={(e) => {
// // // //             setFile(e.target.files?.[0] || null);
// // // //             if (isRecording) {
// // // //               handleStopRecording();
// // // //             }
// // // //           }}
// // // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // // //         />

// // // //         <div className="text-gray-500">OR</div>

// // // //         <div className="flex gap-4">
// // // //           <button
// // // //             onClick={isRecording ? handleStopRecording : handleStartRecording}
// // // //             className={`px-6 py-2 rounded-full font-bold text-white ${
// // // //               isRecording
// // // //                 ? "bg-red-600 hover:bg-red-700"
// // // //                 : "bg-green-600 hover:bg-green-700"
// // // //             } shadow-md`}
// // // //             disabled={loading}
// // // //           >
// // // //             {isRecording ? "Stop Recording" : "Start Recording"}
// // // //           </button>
// // // //         </div>

// // // //         <button
// // // //           onClick={handleUpload}
// // // //           disabled={loading || !file}
// // // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // // //             loading || !file
// // // //               ? "bg-gray-400"
// // // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // // //           }`}
// // // //         >
// // // //           {loading ? "Uploading..." : "Predict"}
// // // //         </button>
// // // //       </div>

// // // //       {error && (
// // // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // // //       )}

// // // //       {/* Prediction Results */}
// // // //       {results && (
// // // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Predictions</h2>
// // // //           <table className="min-w-full border-collapse text-sm">
// // // //             <thead>
// // // //               <tr className="bg-gray-100">
// // // //                 <th className="border-b p-3 text-left">Model</th>
// // // //                 <th className="border-b p-3 text-left">Prediction</th>
// // // //                 <th className="border-b p-3 text-left">Score</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {results.chunks[0] &&
// // // //                 Object.entries(results.chunks[0].predictions).map(
// // // //                   ([model, pred]) => (
// // // //                     <tr key={model} className="hover:bg-gray-50">
// // // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // // //                       <td className="border-b p-3">{pred.label}</td>
// // // //                       <td className="border-b p-3">
// // // //                         {pred.score?.toFixed(4) ?? "—"}
// // // //                       </td>
// // // //                     </tr>
// // // //                   )
// // // //                 )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}
// // // //       {/* Confusion Matrix Display */}
// // // //       {confusionMatrixImage && (
// // // //         <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Confusion Matrix</h2>
// // // //           <div className="confusion-matrix-container">
// // // //             <img 
// // // //               src={`data:image/png;base64,${confusionMatrixImage}`} 
// // // //               alt="Confusion Matrix" 
// // // //               className="confusion-matrix-img"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Machine Learning Models Results */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //           Machine Learning Models Results
// // // //         </h2>
// // // //         <table className="min-w-full border-collapse text-sm">
// // // //           <thead>
// // // //             <tr className="bg-gray-100">
// // // //               <th className="border-b p-3">Model</th>
// // // //               <th className="border-b p-3">Method</th>
// // // //               <th className="border-b p-3">Train Accuracy</th>
// // // //               <th className="border-b p-3">Test Accuracy</th>
// // // //               <th className="border-b p-3">Precision</th>
// // // //               <th className="border-b p-3">Recall</th>
// // // //               <th className="border-b p-3">F1 Score</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {mlModelComparison.map((row, i) => (
// // // //               <tr key={i} className="hover:bg-gray-50">
// // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // //                 <td className="border-b p-3">{row.Method}</td>
// // // //                 <td className="border-b p-3">{row["Train Accuracy"]}</td>
// // // //                 <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {/* Deep Learning Models Results */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //           Deep Learning Models Results
// // // //         </h2>
// // // //         <table className="min-w-full border-collapse text-sm">
// // // //           <thead>
// // // //             <tr className="bg-gray-100">
// // // //               <th className="border-b p-3">Model</th>
// // // //               <th className="border-b p-3">Method</th>
// // // //               <th className="border-b p-3">Accuracy</th>
// // // //               <th className="border-b p-3">Precision</th>
// // // //               <th className="border-b p-3">Recall</th>
// // // //               <th className="border-b p-3">F1 Score</th>
// // // //               <th className="border-b p-3">MSE</th>
// // // //               <th className="border-b p-3">MAE</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {dlModelsResults.map((row, i) => (
// // // //               <tr key={i} className="hover:bg-gray-50">
// // // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // // //                 <td className="border-b p-3">{row.Method}</td>
// // // //                 <td className="border-b p-3">{row.Accuracy}</td>
// // // //                 <td className="border-b p-3">{row.Precision}</td>
// // // //                 <td className="border-b p-3">{row.Recall}</td>
// // // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // // //                 <td className="border-b p-3">{row.MSE}</td>
// // // //                 <td className="border-b p-3">{row.MAE}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {/* Total Features */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Features</h2>
// // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // //           {totalFeatures.map((feature, index) => (
// // // //             <li key={index} className="mb-1">{feature}</li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>

// // // //       {/* Selected Features */}
// // // //       <div className="bg-white p-6 rounded-xl shadow mb-10">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Features (SELECTKBEST)</h2>
// // // //         <ul className="list-disc list-inside columns-2 sm:columns-3 md:columns-4 text-sm text-gray-700">
// // // //           {selectedFeatures.map((feature, index) => (
// // // //             <li key={index} className="mb-1">{feature}</li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>

// // // //       {/* Model Graphs Section */}
// // // //       <div className="space-y-6">
// // // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // // //           Model Performance Graphs
// // // //         </h2>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           <ModelGraphCard
// // // //             title="CNN-LSTM Performance"
// // // //             graphImage={cnnLstmGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="BiLSTM Performance"
// // // //             graphImage={bilstmGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="MobileNetV2 Performance"
// // // //             graphImage={mobilenetGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="ResNet50 Performance"
// // // //             graphImage={resnetGraph}
// // // //           />
// // // //           <ModelGraphCard
// // // //             title="GRU Performance"
// // // //             graphImage={gruGraph}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default SpectrogramsPage;
// // // import React, { useState } from "react";
// // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // Import your local image assets.
// // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // import gruGraph from "../assets/plots/GRU.png";
// // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // ML Models Results
// // // const mlModelComparison = [
// // //   { Model: "Random Forest", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.964, Precision: 0.964, Recall: 0.964, "F1 Score": 0.964 },
// // //   { Model: "Gradient Boosting", Method: "PCA", "Train Accuracy": 1.0, "Test Accuracy": 0.94, Precision: 0.94, Recall: 0.94, "F1 Score": 0.94 },
// // //   { Model: "Support Vector Machine", Method: "PCA", "Train Accuracy": 0.986, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // //   { Model: "K-Nearest Neighbors", Method: "PCA", "Train Accuracy": 0.944, "Test Accuracy": 0.922, Precision: 0.922, Recall: 0.922, "F1 Score": 0.922 },
// // //   { Model: "Logistic Regression", Method: "PCA", "Train Accuracy": 0.962, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // //   { Model: "Random Forest", Method: "SELECTKBEST", "Train Accuracy": 1.0, "Test Accuracy": 0.832, Precision: 0.833, Recall: 0.832, "F1 Score": 0.832 },
// // //   { Model: "Gradient Boosting", Method: "SELECTKBEST", "Train Accuracy": 0.985, "Test Accuracy": 0.934, Precision: 0.934, Recall: 0.934, "F1 Score": 0.934 },
// // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Train Accuracy": 0.998, "Test Accuracy": 0.826, Precision: 0.838, Recall: 0.826, "F1 Score": 0.824 },
// // //   { Model: "K-Nearest Neighbors", Method: "SELECTKBEST", "Train Accuracy": 0.935, "Test Accuracy": 0.892, Precision: 0.893, Recall: 0.892, "F1 Score": 0.892 },
// // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Train Accuracy": 0.964, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // //   { Model: "Random Forest", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // //   { Model: "Gradient Boosting", Method: "None", "Train Accuracy": 1.0, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // //   { Model: "Support Vector Machine", Method: "None", "Train Accuracy": 0.994, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // //   { Model: "K-Nearest Neighbors", Method: "None", "Train Accuracy": 0.969, "Test Accuracy": 0.976, Precision: 0.976, Recall: 0.976, "F1 Score": 0.976 },
// // //   { Model: "Logistic Regression", Method: "None", "Train Accuracy": 0.972, "Test Accuracy": 0.97, Precision: 0.97, Recall: 0.97, "F1 Score": 0.97 },
// // // ];

// // // // Deep Learning Models Results
// // // const dlModelsResults = [
// // //   { Model: "MLP", Method: "pca", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, Precision: 0.972, Recall: 0.97, "F1 Score": 0.97, MSE: 0.03, MAE: 0.03 },
// // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, Precision: 0.799, Recall: 0.796, "F1 Score": 0.795, MSE: 0.204, MAE: 0.204 },
// // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, Precision: 0.843, Recall: 0.838, "F1 Score": 0.837, MSE: 0.162, MAE: 0.162 },
// // //   { Model: "MLP", Method: "selectkbest", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, Precision: 0.988, Recall: 0.988, "F1 Score": 0.988, MSE: 0.012, MAE: 0.012 },
// // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, Precision: 0.86, Recall: 0.856, "F1 Score": 0.856, MSE: 0.144, MAE: 0.144 },
// // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, Precision: 0.765, Recall: 0.754, "F1 Score": 0.752, MSE: 0.246, MAE: 0.246 },
// // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, Precision: 0.85, Recall: 0.844, "F1 Score": 0.843, MSE: 0.156, MAE: 0.156 },
// // //   { Model: "MLP", Method: "none", Accuracy: 0.994, Precision: 0.994, Recall: 0.994, "F1 Score": 0.994, MSE: 0.006, MAE: 0.006 },
// // //   { Model: "CNN", Method: "none", Accuracy: 0.976, Precision: 0.96, Recall: 0.976, "F1 Score": 0.976, MSE: 0.024, MAE: 0.024 },
// // //   { Model: "LSTM", Method: "none", Accuracy: 0.844, Precision: 0.844, Recall: 0.844, "F1 Score": 0.844, MSE: 0.156, MAE: 0.156 },
// // //   { Model: "GRU", Method: "none", Accuracy: 0.832, Precision: 0.834, Recall: 0.832, "F1 Score": 0.832, MSE: 0.168, MAE: 0.168 },
// // //   { Model: "BiLSTM", Method: "none", Accuracy: 0.898, Precision: 0.873, Recall: 0.868, "F1 Score": 0.867, MSE: 0.132, MAE: 0.132 },
// // // ];
// // // const totalFeatures = [
// // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local",
// // //   "jitter_abs", "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local",
// // //   "shimmer_db", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0",
// // //   "mfcc1", "mfcc2", "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8",
// // //   "mfcc9", "mfcc10", "mfcc11", "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3",
// // //   "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9",
// // //   "mel_mean10", "mel_mean11", "mel_mean12", "mel_mean13", "mel_mean14",
// // //   "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean18", "mel_mean19",
// // //   "mel_mean20", "mel_mean21", "mel_mean22", "mel_mean23", "mel_mean24",
// // //   "mel_mean25", "mel_mean26", "mel_mean27", "mel_mean28", "mel_mean29",
// // //   "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34",
// // //   "mel_mean35", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // //   "mel_std0", "mel_std1", "mel_std2", "mel_std3", "mel_std4", "mel_std5",
// // //   "mel_std6", "mel_std7", "mel_std8", "mel_std9", "mel_std10", "mel_std11",
// // //   "mel_std12", "mel_std13", "mel_std14", "mel_std15", "mel_std16", "mel_std17",
// // //   "mel_std18", "mel_std19", "mel_std20", "mel_std21", "mel_std22", "mel_std23",
// // //   "mel_std24", "mel_std25", "mel_std26", "mel_std27", "mel_std28", "mel_std29",
// // //   "mel_std30", "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35",
// // //   "mel_std36", "mel_std37", "mel_std38", "mel_std39", "label"
// // // ];

// // // const selectedFeatures = [
// // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr",
// // //   "mfcc8", "mfcc9", "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6",
// // //   "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean15", "mel_mean16",
// // //   "mel_mean17", "mel_mean30", "mel_mean31", "mel_mean32", "mel_mean33",
// // //   "mel_mean34", "mel_mean36", "mel_mean37", "mel_mean38", "mel_mean39",
// // //   "mel_std1", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37",
// // //   "mel_std38", "mel_std39"
// // // ];

// // // const confusionMatricesData = {
// // //   'BiLSTM ': { TP: 80, TN: 85, FP: 10, FN: 5 },
// // //   'BiGRU': { TP: 75, TN: 82, FP: 13, FN: 8 },
// // //   'CNN': { TP: 95, TN: 92, FP: 8, FN: 5 },
// // //   'MLP ': { TP: 98, TN: 97, FP: 2, FN: 3 },
// // //   'Logistic Regression': { TP: 90, TN: 88, FP: 12, FN: 10 },
// // //   'Gradient Boosting ': { TP: 85, TN: 87, FP: 13, FN: 15 },
// // //   'K-Nearest Neighbors': { TP: 82, TN: 80, FP: 18, FN: 20 },
// // //   'Random Forest': { TP: 88, TN: 85, FP: 15, FN: 12 },
// // //   'Support Vector Machine': { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // };

// // // // A component to display a single model's graph
// // // const ModelGraphCard = ({ title, graphImage }) => (
// // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // //     <img
// // //       src={graphImage}
// // //       alt={`${title} Performance Graphs`}
// // //       className="w-full h-auto rounded-lg"
// // //     />
// // //   </div>
// // // );

// // // function SpectrogramsPage() {
// // //   const [file, setFile] = useState(null);
// // //   const [results, setResults] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
  
// // //   const handleUpload = async () => {
// // //     if (!file) {
// // //       setError("Please select a file to upload!");
// // //       return;
// // //     }
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("file", file);

// // //       const res = await fetch("http://localhost:5000/predict", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // //       const data = await res.json();
// // //       setResults(data);
// // //     } catch (err) {
// // //       setError(err.message || "Something went wrong");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-10 bg-gray-100 min-h-screen">
// // //       <style>{`
// // //         .confusion-matrix-container {
// // //           border: 2px solid #e2e8f0;
// // //           border-radius: 0.75rem;
// // //           padding: 1rem;
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //         }
// // //         .confusion-matrix-img {
// // //           max-width: 100%;
// // //           height: auto;
// // //         }
// // //       `}</style>
// // //       <h1 className="text-3xl font-bold text-gray-800 mb-8">
// // //         Parkinson Prediction Results
// // //       </h1>

// // //       {/* Upload Section (Simplified) */}
// // //       <div className="bg-white p-6 rounded-xl shadow mb-8 flex items-center gap-4">
// // //         <input
// // //           type="file"
// // //           accept="audio/wav"
// // //           onChange={(e) => setFile(e.target.files?.[0] || null)}
// // //           className="flex-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
// // //                      file:rounded-full file:border-0 file:text-sm file:font-semibold 
// // //                      file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// // //         />
// // //         <button
// // //           onClick={handleUpload}
// // //           disabled={loading || !file}
// // //           className={`px-6 py-2 rounded-full font-bold text-white ${
// // //             loading || !file
// // //               ? "bg-gray-400"
// // //               : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // //           }`}
// // //         >
// // //           {loading ? "Uploading..." : "Predict"}
// // //         </button>
// // //       </div>

// // //       {error && (
// // //         <div className="bg-red-100 p-4 rounded-xl text-red-700 mb-6">{error}</div>
// // //       )}

// // //       {/* Prediction Results (for a single file) */}
// // //       {results && results.chunks && results.chunks.length > 0 && (
// // //         <div className="bg-white p-6 rounded-xl shadow mb-10">
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Prediction Results for Uploaded File</h2>
// // //           <table className="min-w-full border-collapse text-sm">
// // //             <thead>
// // //               <tr className="bg-gray-100">
// // //                 <th className="border-b p-3 text-left">Model</th>
// // //                 <th className="border-b p-3 text-left">Prediction</th>
// // //                 <th className="border-b p-3 text-left">Score</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
// // //                 <tr key={model} className="hover:bg-gray-50">
// // //                   <td className="border-b p-3 font-semibold">{model}</td>
// // //                   <td className="border-b p-3">{pred.label}</td>
// // //                   <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}

// // //       {/* Confusion Matrices Table */}
// // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //         <table className="min-w-full border-collapse text-sm">
// // //           <thead>
// // //             <tr className="bg-gray-100">
// // //               <th className="border-b p-3 text-left">Model</th>
// // //               <th className="border-b p-3 text-left">True Positives (TP)</th>
// // //               <th className="border-b p-3 text-left">True Negatives (TN)</th>
// // //               <th className="border-b p-3 text-left">False Positives (FP)</th>
// // //               <th className="border-b p-3 text-left">False Negatives (FN)</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //               <tr key={model} className="hover:bg-gray-50">
// // //                 <td className="border-b p-3 font-semibold">{model}</td>
// // //                 <td className="border-b p-3">{vals.TP}</td>
// // //                 <td className="border-b p-3">{vals.TN}</td>
// // //                 <td className="border-b p-3">{vals.FP}</td>
// // //                 <td className="border-b p-3">{vals.FN}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {/* Machine Learning Models Results Table */}
// // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //           Machine Learning Models
// // //         </h2>
// // //         <table className="min-w-full border-collapse text-sm">
// // //           <thead>
// // //             <tr className="bg-gray-100">
// // //               <th className="border-b p-3 text-left">Model</th>
// // //               <th className="border-b p-3 text-left">Method</th>
// // //               <th className="border-b p-3 text-left">Test Accuracy</th>
// // //               <th className="border-b p-3 text-left">F1 Score</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {mlModelComparison.map((row, i) => (
// // //               <tr key={i} className="hover:bg-gray-50">
// // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                 <td className="border-b p-3">{row.Method}</td>
// // //                 <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {/* Deep Learning Models Results Table */}
// // //       <div className="bg-white p-6 rounded-xl shadow mb-10 overflow-x-auto">
// // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //           Deep Learning Models
// // //         </h2>
// // //         <table className="min-w-full border-collapse text-sm">
// // //           <thead>
// // //             <tr className="bg-gray-100">
// // //               <th className="border-b p-3 text-left">Model</th>
// // //               <th className="border-b p-3 text-left">Method</th>
// // //               <th className="border-b p-3 text-left">Accuracy</th>
// // //               <th className="border-b p-3 text-left">F1 Score</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {dlModelsResults.map((row, i) => (
// // //               <tr key={i} className="hover:bg-gray-50">
// // //                 <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                 <td className="border-b p-3">{row.Method}</td>
// // //                 <td className="border-b p-3">{row.Accuracy}</td>
// // //                 <td className="border-b p-3">{row["F1 Score"]}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {/* Feature Lists */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <div className="bg-white p-6 rounded-xl shadow">
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Features</h2>
// // //           <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //             {totalFeatures.map((feature, index) => (
// // //               <li key={index} className="mb-1">{feature}</li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //         <div className="bg-white p-6 rounded-xl shadow">
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Features (SELECTKBEST)</h2>
// // //           <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //             {selectedFeatures.map((feature, index) => (
// // //               <li key={index} className="mb-1">{feature}</li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       </div>
      
// // //       {/* Model Graphs Section */}
// // //       <div className="space-y-6 mt-10">
// // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //           Model Performance Graphs
// // //         </h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //           <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //           <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //           <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //           <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //           <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default SpectrogramsPage;
// // // import React, { useState } from "react";
// // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // Import local image assets for graphs
// // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // import gruGraph from "../assets/plots/GRU.png";
// // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // Hard-coded data
// // // const mlModelComparison = [
// // //   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
// // //   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
// // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
// // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// // // ];

// // // const dlModelsResults = [

// // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, "F1 Score": 0.97 },
// // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, "F1 Score": 0.844 },
// // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, "F1 Score": 0.795 },
// // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, "F1 Score": 0.837 },
// // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, "F1 Score": 0.988 },
// // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, "F1 Score": 0.856 },
// // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, "F1 Score": 0.752 },
// // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, "F1 Score": 0.843 },
  
// // // ];

// // // const confusionMatricesData = {
// // //   'BiLSTM': { TP: 80, TN: 85, FP: 10, FN: 5 },
// // //   'BiGRU': { TP: 75, TN: 82, FP: 13, FN: 8 },
// // //   'CNN': { TP: 95, TN: 92, FP: 8, FN: 5 },
// // //   'MLP': { TP: 98, TN: 97, FP: 2, FN: 3 },
// // //   'Logistic Regression': { TP: 90, TN: 88, FP: 12, FN: 10 },
// // //   'Gradient Boosting': { TP: 85, TN: 87, FP: 13, FN: 15 },
// // //   'K-Nearest Neighbors': { TP: 82, TN: 80, FP: 18, FN: 20 },
// // //   'Random Forest': { TP: 88, TN: 85, FP: 15, FN: 12 },
// // //   'Support Vector Machine': { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // };

// // // const totalFeatures = [
// // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
// // //   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
// // //   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
// // //   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
// // //   "mel_mean0", "mel_mean1", "mel_mean2", "mel_mean3", "mel_mean4", "mel_mean5",
// // //   "mel_mean6", "mel_mean7", "mel_mean8", "mel_mean9", "mel_mean10", "mel_mean11",
// // //   "mel_mean12", "mel_mean13", "mel_mean14", "mel_mean15", "mel_mean16",
// // //   "mel_mean17", "mel_mean18", "mel_mean19", "mel_mean20", "mel_mean21",
// // //   "mel_mean22", "mel_mean23", "mel_mean24", "mel_mean25", "mel_mean26",
// // //   "mel_mean27", "mel_mean28", "mel_mean29", "mel_mean30", "mel_mean31",
// // //   "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean35", "mel_mean36",
// // //   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std0", "mel_std1", "mel_std2",
// // //   "mel_std3", "mel_std4", "mel_std5", "mel_std6", "mel_std7", "mel_std8",
// // //   "mel_std9", "mel_std10", "mel_std11", "mel_std12", "mel_std13", "mel_std14",
// // //   "mel_std15", "mel_std16", "mel_std17", "mel_std18", "mel_std19", "mel_std20",
// // //   "mel_std21", "mel_std22", "mel_std23", "mel_std24", "mel_std25", "mel_std26",
// // //   "mel_std27", "mel_std28", "mel_std29", "mel_std30", "mel_std31", "mel_std32",
// // //   "mel_std33", "mel_std34", "mel_std35", "mel_std36", "mel_std37", "mel_std38",
// // //   "mel_std39", "label"
// // // ];

// // // const selectedFeatures = [
// // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
// // //   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
// // //   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
// // //   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
// // //   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
// // //   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
// // //   "mel_std37", "mel_std38", "mel_std39"
// // // ];
// // // const ModelGraphCard = ({ title, graphImage }) => (
// // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // //     <img
// // //       src={graphImage}
// // //       alt={`${title} Performance Graphs`}
// // //       className="w-full h-auto rounded-lg"
// // //     />
// // //   </div>
// // // );

// // // function SpectrogramsPage() {
// // //   const [file, setFile] = useState(null);
// // //   const [audioURL, setAudioURL] = useState("");
// // //   const [results, setResults] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [view, setView] = useState("test");

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files?.[0] || null;
// // //     setFile(selectedFile);
// // //     if (selectedFile) {
// // //       setAudioURL(URL.createObjectURL(selectedFile));
// // //     } else {
// // //       setAudioURL("");
// // //     }
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) {
// // //       setError("Please select a file to upload!");
// // //       return;
// // //     }
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("file", file);

// // //       const res = await fetch("http://localhost:5000/predict", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (!res.ok) throw new Error("Server Error: " + res.status);
// // //       const data = await res.json();
// // //       setResults(data);
// // //     } catch (err) {
// // //       setError(err.message || "Something went wrong");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex bg-gray-100 min-h-screen font-sans">
// // //       {/* Sidebar Navigation */}
// // //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// // //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// // //           Dashboard 🔬
// // //         </h2>
// // //         <button
// // //           onClick={() => setView("test")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "test"
// // //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Test & Predict
// // //         </button>
// // //         <button
// // //           onClick={() => setView("metrics")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "metrics"
// // //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Model Metrics
// // //         </button>
// // //         <button
// // //           onClick={() => setView("graphs")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "graphs"
// // //               ? "bg-teal-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Performance Graphs
// // //         </button>
// // //       </div>

// // //       {/* Main Content Area */}
// // //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// // //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// // //           Parkinson's Prediction Dashboard
// // //         </h1>

// // //         {/* Test & Predict View */}
// // //         {view === "test" && (
// // //           <div className="space-y-8">
// // //             <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-center gap-4">
// // //               <label htmlFor="file-upload" className="flex-1 text-gray-700 font-medium">
// // //                 Select a `.wav` audio file for prediction:
// // //               </label>
// // //               <input
// // //                 id="file-upload"
// // //                 type="file"
// // //                 accept="audio/wav"
// // //                 onChange={handleFileChange}
// // //                 className="flex-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// // //               />
// // //               <button
// // //                 onClick={handleUpload}
// // //                 disabled={loading || !file}
// // //                 className={`flex-shrink-0 px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// // //                   loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // //                 }`}
// // //               >
// // //                 {loading ? "Processing..." : "Predict"}
// // //               </button>
// // //             </div>

// // //             {/* Audio Playback */}
// // //             {audioURL && (
// // //               <div className="bg-white p-4 rounded-xl shadow">
// // //                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
// // //                 <audio controls src={audioURL} className="w-full" />
// // //               </div>
// // //             )}

// // //             {error && (
// // //               <div className="bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
// // //             )}

// // //             {results && results.chunks && results.chunks.length > 0 && (
// // //               <div className="bg-white p-6 rounded-xl shadow">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Prediction Results</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">Prediction</th>
// // //                       <th className="border-b p-3">Confidence Score</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
// // //                       <tr key={model} className="hover:bg-gray-50">
// // //                         <td className="border-b p-3 font-semibold">{model}</td>
// // //                         <td className="border-b p-3">{pred.label}</td>
// // //                         <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}



// // //         {/* Model Metrics View */}
// // //         {view === "metrics" && (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Test Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {mlModelComparison.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {dlModelsResults.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row.Accuracy}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">TP</th>
// // //                     <th className="border-b p-3">TN</th>
// // //                     <th className="border-b p-3">FP</th>
// // //                     <th className="border-b p-3">FN</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //                     <tr key={model} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // //                       <td className="border-b p-3">{vals.TP}</td>
// // //                       <td className="border-b p-3">{vals.TN}</td>
// // //                       <td className="border-b p-3">{vals.FP}</td>
// // //                       <td className="border-b p-3">{vals.FN}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //               <div className="grid grid-cols-1 gap-6">
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {totalFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {selectedFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
        
// // //         {/* Performance Graphs View */}
// // //         {view === "graphs" && (
// // //           <div className="space-y-6">
// // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //               Model Performance Graphs
// // //             </h2>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default SpectrogramsPage;

// // // import React, { useState } from "react";
// // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // Import local image assets for graphs
// // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // import gruGraph from "../assets/plots/GRU.png";
// // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // Hard-coded data
// // // const mlModelComparison = [
// // //   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
// // //   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
// // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
// // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// // // ];

// // // const dlModelsResults = [
// // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, "F1 Score": 0.97 },
// // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, "F1 Score": 0.844 },
// // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, "F1 Score": 0.795 },
// // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, "F1 Score": 0.837 },
// // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, "F1 Score": 0.988 },
// // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, "F1 Score": 0.856 },
// // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, "F1 Score": 0.752 },
// // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, "F1 Score": 0.843 },
// // // ];

// // // const confusionMatricesData = {
// // //   'BiLSTM': { TP: 80, TN: 85, FP: 10, FN: 5 },
// // //   'BiGRU': { TP: 75, TN: 82, FP: 13, FN: 8 },
// // //   'CNN': { TP: 95, TN: 92, FP: 8, FN: 5 },
// // //   'MLP': { TP: 98, TN: 97, FP: 2, FN: 3 },
// // //   'Logistic Regression': { TP: 90, TN: 88, FP: 12, FN: 10 },
// // //   'Gradient Boosting': { TP: 85, TN: 87, FP: 13, FN: 15 },
// // //   'K-Nearest Neighbors': { TP: 82, TN: 80, FP: 18, FN: 20 },
// // //   'Random Forest': { TP: 88, TN: 85, FP: 15, FN: 12 },
// // //   'Support Vector Machine': { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // };

// // // const totalFeatures = [
// // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
// // //   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
// // //   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
// // //   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
// // //   "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
// // // ];

// // // const selectedFeatures = [
// // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
// // //   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
// // //   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
// // //   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
// // //   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
// // //   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
// // //   "mel_std37", "mel_std38", "mel_std39"
// // // ];

// // // const ModelGraphCard = ({ title, graphImage }) => (
// // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // //     <img
// // //       src={graphImage}
// // //       alt={`${title} Performance Graphs`}
// // //       className="w-full h-auto rounded-lg"
// // //     />
// // //   </div>
// // // );

// // // function SpectrogramsPage() {
// // //   const [file, setFile] = useState(null);
// // //   const [audioURL, setAudioURL] = useState("");
// // //   const [results, setResults] = useState(null);
// // //   const [extractedFeatures, setExtractedFeatures] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [view, setView] = useState("test");

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files?.[0] || null;
// // //     setFile(selectedFile);
// // //     if (selectedFile) {
// // //       setAudioURL(URL.createObjectURL(selectedFile));
// // //       // Display mock features immediately after a file is selected
// // //       setExtractedFeatures({
// // //         meanF0Hz: 125.45,
// // //         hnr: 25.6,
// // //         mfcc8: -15.2,
// // //         shimmer_apq3: 0.005,
// // //         mel_mean15: 0.12,
// // //       });
// // //     } else {
// // //       setAudioURL("");
// // //       setExtractedFeatures(null);
// // //     }
// // //     setResults(null);
// // //     setError(null);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) {
// // //       setError("Please select a file to upload!");
// // //       return;
// // //     }
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("file", file);

// // //       // In a real application, this would fetch predictions and features from the backend
// // //       const res = await fetch("http://localhost:5000/predict", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (!res.ok) {
// // //         throw new Error("Server Error: " + res.status);
// // //       }
// // //       const data = await res.json();
// // //       setResults(data);
// // //     } catch (err) {
// // //       setError(err.message || "Something went wrong");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex bg-gray-100 min-h-screen font-sans">
// // //       {/* Sidebar Navigation */}
// // //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// // //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// // //           Dashboard 🔬
// // //         </h2>
// // //         <button
// // //           onClick={() => setView("test")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "test"
// // //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Test & Predict
// // //         </button>
// // //         <button
// // //           onClick={() => setView("metrics")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "metrics"
// // //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Model Metrics
// // //         </button>
// // //         <button
// // //           onClick={() => setView("graphs")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "graphs"
// // //               ? "bg-teal-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Performance Graphs
// // //         </button>
// // //       </div>

// // //       {/* Main Content Area */}
// // //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// // //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// // //           Parkinson's Prediction Dashboard
// // //         </h1>

// // //         {/* The combined Test & Predict View */}
// // //         {view === "test" && (
// // //           <div className="space-y-8">
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //               {/* Top Left: Audio Upload and Playback */}
// // //               <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
// // //                 <div>
// // //                   <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
// // //                     Select a `.wav` audio file for prediction:
// // //                   </label>
// // //                   <div className="flex items-center gap-4">
// // //                     <input
// // //                       id="file-upload"
// // //                       type="file"
// // //                       accept="audio/wav"
// // //                       onChange={handleFileChange}
// // //                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// // //                     />
// // //                     <button
// // //                       onClick={handleUpload}
// // //                       disabled={loading || !file}
// // //                       className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// // //                         loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // //                       }`}
// // //                     >
// // //                       {loading ? "Processing..." : "Predict"}
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //                 {audioURL && (
// // //                   <div className="mt-4">
// // //                     <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
// // //                     <audio controls src={audioURL} className="w-full" />
// // //                   </div>
// // //                 )}
// // //                 {error && (
// // //                   <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
// // //                 )}
// // //               </div>

// // //               {/* Top Right: Extracted Features */}
// // //               <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Extracted Features</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100 sticky top-0">
// // //                       <th className="border-b p-3">Feature</th>
// // //                       <th className="border-b p-3">Value</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {extractedFeatures ? (
// // //                       Object.entries(extractedFeatures).map(([feature, value]) => (
// // //                         <tr key={feature} className="hover:bg-gray-50">
// // //                           <td className="border-b p-3 font-semibold">{feature}</td>
// // //                           <td className="border-b p-3">{value?.toFixed(4) ?? "—"}</td>
// // //                         </tr>
// // //                       ))
// // //                     ) : (
// // //                       <tr>
// // //                         <td colSpan="2" className="p-3 text-center text-gray-500">
// // //                           Features will be displayed here after a file is uploaded.
// // //                         </td>
// // //                       </tr>
// // //                     )}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>

// // //             {/* Down: Prediction Results */}
// // //             {results && results.chunks && results.chunks.length > 0 && (
// // //               <div className="bg-white p-6 rounded-xl shadow">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Prediction Results</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">Prediction</th>
// // //                       <th className="border-b p-3">Confidence Score</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
// // //                       <tr key={model} className="hover:bg-gray-50">
// // //                         <td className="border-b p-3 font-semibold">{model}</td>
// // //                         <td className="border-b p-3">{pred.label}</td>
// // //                         <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             )}
            
// // //             {/* Down: Model Performance Tables (ML and DL) */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">Method</th>
// // //                       <th className="border-b p-3">Test Accuracy</th>
// // //                       <th className="border-b p-3">F1 Score</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {mlModelComparison.map((row, i) => (
// // //                       <tr key={i} className="hover:bg-gray-50">
// // //                         <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                         <td className="border-b p-3">{row.Method}</td>
// // //                         <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                         <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>

// // //               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">Method</th>
// // //                       <th className="border-b p-3">Accuracy</th>
// // //                       <th className="border-b p-3">F1 Score</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {dlModelsResults.map((row, i) => (
// // //                       <tr key={i} className="hover:bg-gray-50">
// // //                         <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                         <td className="border-b p-3">{row.Method}</td>
// // //                         <td className="border-b p-3">{row.Accuracy}</td>
// // //                         <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>
            
// // //             {/* Down: Confusion Matrices and Feature Lists */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">TP</th>
// // //                       <th className="border-b p-3">TN</th>
// // //                       <th className="border-b p-3">FP</th>
// // //                       <th className="border-b p-3">FN</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //                       <tr key={model} className="hover:bg-gray-50">
// // //                         <td className="border-b p-3 font-semibold">{model}</td>
// // //                         <td className="border-b p-3">{vals.TP}</td>
// // //                         <td className="border-b p-3">{vals.TN}</td>
// // //                         <td className="border-b p-3">{vals.FP}</td>
// // //                         <td className="border-b p-3">{vals.FN}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
            
// // //               <div className="bg-white p-6 rounded-xl shadow">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //                 <div className="grid grid-cols-1 gap-6">
// // //                   <div>
// // //                     <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                     <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                       {totalFeatures.map((feature, index) => (
// // //                         <li key={index} className="mb-1">{feature}</li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                     <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                       {selectedFeatures.map((feature, index) => (
// // //                         <li key={index} className="mb-1">{feature}</li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Down: Performance Graphs */}
// // //             <div className="space-y-6">
// // //               <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //                 Model Performance Graphs
// // //               </h2>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                 <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //                 <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //                 <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //                 <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //                 <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* The other views are still separate */}
// // //         {view === "metrics" && (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Test Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {mlModelComparison.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {dlModelsResults.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row.Accuracy}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">TP</th>
// // //                     <th className="border-b p-3">TN</th>
// // //                     <th className="border-b p-3">FP</th>
// // //                     <th className="border-b p-3">FN</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //                     <tr key={model} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // //                       <td className="border-b p-3">{vals.TP}</td>
// // //                       <td className="border-b p-3">{vals.TN}</td>
// // //                       <td className="border-b p-3">{vals.FP}</td>
// // //                       <td className="border-b p-3">{vals.FN}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //               <div className="grid grid-cols-1 gap-6">
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {totalFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {selectedFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {view === "graphs" && (
// // //           <div className="space-y-6">
// // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //               Model Performance Graphs
// // //             </h2>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default SpectrogramsPage;
// // // import React, { useState } from "react";
// // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // Import local image assets for graphs
// // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // import gruGraph from "../assets/plots/GRU.png";
// // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // Hard-coded data
// // // const mlModelComparison = [
// // //   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
// // //   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
// // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
// // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// // // ];

// // // const dlModelsResults = [
// // //   { Model: "CNN", Method: "pca", Accuracy: 0.97, "F1 Score": 0.97 },
// // //   { Model: "LSTM", Method: "pca", Accuracy: 0.844, "F1 Score": 0.844 },
// // //   { Model: "GRU", Method: "pca", Accuracy: 0.796, "F1 Score": 0.795 },
// // //   { Model: "BiLSTM", Method: "pca", Accuracy: 0.838, "F1 Score": 0.837 },
// // //   { Model: "CNN", Method: "selectkbest", Accuracy: 0.988, "F1 Score": 0.988 },
// // //   { Model: "LSTM", Method: "selectkbest", Accuracy: 0.856, "F1 Score": 0.856 },
// // //   { Model: "GRU", Method: "selectkbest", Accuracy: 0.754, "F1 Score": 0.752 },
// // //   { Model: "BiLSTM", Method: "selectkbest", Accuracy: 0.844, "F1 Score": 0.843 },
// // // ];

// // // const confusionMatricesData = {
// // //   'BiLSTM': { TP: 80, TN: 85, FP: 10, FN: 5 },
// // //   'BiGRU': { TP: 75, TN: 82, FP: 13, FN: 8 },
// // //   'CNN': { TP: 95, TN: 92, FP: 8, FN: 5 },
// // //   'MLP': { TP: 98, TN: 97, FP: 2, FN: 3 },
// // //   'Logistic Regression': { TP: 90, TN: 88, FP: 12, FN: 10 },
// // //   'Gradient Boosting': { TP: 85, TN: 87, FP: 13, FN: 15 },
// // //   'K-Nearest Neighbors': { TP: 82, TN: 80, FP: 18, FN: 20 },
// // //   'Random Forest': { TP: 88, TN: 85, FP: 15, FN: 12 },
// // //   'Support Vector Machine': { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // };

// // // const totalFeatures = [
// // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
// // //   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
// // //   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
// // //   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
// // //   "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
// // // ];

// // // const selectedFeatures = [
// // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
// // //   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
// // //   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
// // //   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
// // //   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
// // //   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
// // //   "mel_std37", "mel_std38", "mel_std39"
// // // ];

// // // const ModelGraphCard = ({ title, graphImage }) => (
// // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // //     <img
// // //       src={graphImage}
// // //       alt={`${title} Performance Graphs`}
// // //       className="w-full h-auto rounded-lg"
// // //     />
// // //   </div>
// // // );

// // // function SpectrogramsPage() {
// // //   const [file, setFile] = useState(null);
// // //   const [audioURL, setAudioURL] = useState("");
// // //   const [results, setResults] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [view, setView] = useState("test");

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files?.[0] || null;
// // //     setFile(selectedFile);
// // //     if (selectedFile) {
// // //       setAudioURL(URL.createObjectURL(selectedFile));
// // //     } else {
// // //       setAudioURL("");
// // //     }
// // //     setResults(null); // Clear previous results when a new file is chosen
// // //     setError(null);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) {
// // //       setError("Please select a file to upload!");
// // //       return;
// // //     }
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("file", file);

// // //       // Assuming the backend returns the prediction results
// // //       const res = await fetch("http://localhost:5000/predict", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (!res.ok) {
// // //         throw new Error("Server Error: " + res.status);
// // //       }
// // //       const data = await res.json();
// // //       setResults(data);
// // //     } catch (err) {
// // //       setError(err.message || "Something went wrong");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex bg-gray-100 min-h-screen font-sans">
// // //       {/* Sidebar Navigation */}
// // //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// // //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// // //           Dashboard 🔬
// // //         </h2>
// // //         <button
// // //           onClick={() => setView("test")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "test"
// // //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Test & Predict
// // //         </button>
// // //         <button
// // //           onClick={() => setView("metrics")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "metrics"
// // //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Model Metrics
// // //         </button>
// // //         <button
// // //           onClick={() => setView("graphs")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "graphs"
// // //               ? "bg-teal-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Performance Graphs
// // //         </button>
// // //       </div>

// // //       {/* Main Content Area */}
// // //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// // //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// // //           Parkinson's Prediction Dashboard
// // //         </h1>

// // //         {/* The combined Test & Predict View */}
// // //         {view === "test" && (
// // //           <div className="space-y-8">
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //               {/* Top Left: Audio Upload and Playback */}
// // //               <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
// // //                 <div>
// // //                   <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
// // //                     Select a `.wav` audio file for prediction:
// // //                   </label>
// // //                   <div className="flex items-center gap-4">
// // //                     <input
// // //                       id="file-upload"
// // //                       type="file"
// // //                       accept="audio/wav"
// // //                       onChange={handleFileChange}
// // //                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// // //                     />
// // //                     <button
// // //                       onClick={handleUpload}
// // //                       disabled={loading || !file}
// // //                       className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// // //                         loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // //                       }`}
// // //                     >
// // //                       {loading ? "Processing..." : "Predict"}
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //                 {audioURL && (
// // //                   <div className="mt-4">
// // //                     <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
// // //                     <audio controls src={audioURL} className="w-full" />
// // //                   </div>
// // //                 )}
// // //                 {error && (
// // //                   <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
// // //                 )}
// // //               </div>

// // //               {/* Top Right: Prediction Results */}
// // //               <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Prediction Results</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100 sticky top-0">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">Prediction</th>
// // //                       <th className="border-b p-3">Confidence Score</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {results && results.chunks && results.chunks.length > 0 ? (
// // //                       Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
// // //                         <tr key={model} className="hover:bg-gray-50">
// // //                           <td className="border-b p-3 font-semibold">{model}</td>
// // //                           <td className="border-b p-3">{pred.label}</td>
// // //                           <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
// // //                         </tr>
// // //                       ))
// // //                     ) : (
// // //                       <tr>
// // //                         <td colSpan="3" className="p-3 text-center text-gray-500">
// // //                           Prediction results will be displayed here.
// // //                         </td>
// // //                       </tr>
// // //                     )}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>

// // //             {/* Down: All Other Tables and Graphs */}
// // //             <div className="space-y-8">
// // //               {/* Down: Model Performance Tables (ML and DL) */}
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //                   <table className="w-full text-left border-collapse text-sm">
// // //                     <thead>
// // //                       <tr className="bg-gray-100">
// // //                         <th className="border-b p-3">Model</th>
// // //                         <th className="border-b p-3">Method</th>
// // //                         <th className="border-b p-3">Test Accuracy</th>
// // //                         <th className="border-b p-3">F1 Score</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {mlModelComparison.map((row, i) => (
// // //                         <tr key={i} className="hover:bg-gray-50">
// // //                           <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                           <td className="border-b p-3">{row.Method}</td>
// // //                           <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                           <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>

// // //                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //                   <table className="w-full text-left border-collapse text-sm">
// // //                     <thead>
// // //                       <tr className="bg-gray-100">
// // //                         <th className="border-b p-3">Model</th>
// // //                         <th className="border-b p-3">Method</th>
// // //                         <th className="border-b p-3">Accuracy</th>
// // //                         <th className="border-b p-3">F1 Score</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {dlModelsResults.map((row, i) => (
// // //                         <tr key={i} className="hover:bg-gray-50">
// // //                           <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                           <td className="border-b p-3">{row.Method}</td>
// // //                           <td className="border-b p-3">{row.Accuracy}</td>
// // //                           <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>
// // //               </div>
              
// // //               {/* Down: Confusion Matrices and Feature Lists */}
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //                   <table className="w-full text-left border-collapse text-sm">
// // //                     <thead>
// // //                       <tr className="bg-gray-100">
// // //                         <th className="border-b p-3">Model</th>
// // //                         <th className="border-b p-3">TP</th>
// // //                         <th className="border-b p-3">TN</th>
// // //                         <th className="border-b p-3">FP</th>
// // //                         <th className="border-b p-3">FN</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //                         <tr key={model} className="hover:bg-gray-50">
// // //                           <td className="border-b p-3 font-semibold">{model}</td>
// // //                           <td className="border-b p-3">{vals.TP}</td>
// // //                           <td className="border-b p-3">{vals.TN}</td>
// // //                           <td className="border-b p-3">{vals.FP}</td>
// // //                           <td className="border-b p-3">{vals.FN}</td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>
              
// // //                 <div className="bg-white p-6 rounded-xl shadow">
// // //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //                   <div className="grid grid-cols-1 gap-6">
// // //                     <div>
// // //                       <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                       <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                         {totalFeatures.map((feature, index) => (
// // //                           <li key={index} className="mb-1">{feature}</li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                       <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                         {selectedFeatures.map((feature, index) => (
// // //                           <li key={index} className="mb-1">{feature}</li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Down: Performance Graphs */}
// // //               <div className="space-y-6">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //                   Model Performance Graphs
// // //                 </h2>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //                   <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //                   <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //                   <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //                   <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* The other views are still separate */}
// // //         {view === "metrics" && (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Test Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {mlModelComparison.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {dlModelsResults.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row.Accuracy}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">TP</th>
// // //                     <th className="border-b p-3">TN</th>
// // //                     <th className="border-b p-3">FP</th>
// // //                     <th className="border-b p-3">FN</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //                     <tr key={model} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // //                       <td className="border-b p-3">{vals.TP}</td>
// // //                       <td className="border-b p-3">{vals.TN}</td>
// // //                       <td className="border-b p-3">{vals.FP}</td>
// // //                       <td className="border-b p-3">{vals.FN}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //               <div className="grid grid-cols-1 gap-6">
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {totalFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {selectedFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {view === "graphs" && (
// // //           <div className="space-y-6">
// // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //               Model Performance Graphs
// // //             </h2>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default SpectrogramsPage;
// // // import React, { useState } from "react";
// // // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // // Import local image assets for graphs
// // // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // // import gruGraph from "../assets/plots/GRU.png";
// // // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // // import resnetGraph from "../assets/plots/ResNet50.png";

// // // // Hard-coded data
// // // const mlModelComparison = [
// // //   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
// // //   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// // //   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
// // //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
// // //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// // // ];

// // // const dlModelsResults = [
// // //   { Model: "CNN", Accuracy: 0.93, Precision: 0.92, Recall: 0.95, "F1 Score": 0.93 },
// // //   { Model: "LSTM", Accuracy: 0.844, Precision: 0.84, Recall: 0.85, "F1 Score": 0.844 },
// // //   { Model: "GRU", Accuracy: 0.796, Precision: 0.80, Recall: 0.79, "F1 Score": 0.795 },
// // //   { Model: "BiLSTM", Accuracy: 0.77, Precision: 0.82, Recall: 0.71, "F1 Score": 0.76 },
// // //   { Model: "ResNet50", Accuracy: 0.76, Precision: 0.71, Recall: 0.88, "F1 Score": 0.78 },
  
// // // ];

// // // // Consolidated confusion matrix data
// // // const allConfusionMatrices = {
// // //   "CNN": { TP: 271, TN: 262, FP: 23, FN: 14 },
// // //   "ResNet50": { TP: 252, TN: 183, FP: 102, FN: 33 },
// // //   "MobileNetV2": { TP: 257, TN: 259, FP: 26, FN: 28 },
// // //   "BiLSTM": { TP: 203, TN: 241, FP: 44, FN: 82 },
// // //   "GRU": { TP: 0, TN: 285, FP: 0, FN: 285 },
// // //   "LSTM": { TP: 200, TN: 240, FP: 45, FN: 85 }, // Placeholder data
// // //   "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
// // //   "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
// // // };

// // // const totalFeatures = [
// // //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
// // //   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
// // //   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
// // //   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
// // //   "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
// // // ];

// // // const selectedFeatures = [
// // //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
// // //   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
// // //   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
// // //   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
// // //   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
// // //   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
// // //   "mel_std37", "mel_std38", "mel_std39"
// // // ];

// // // const italianFeaturesData = [
// // //   { "voiceID": "1", "meanF0Hz": 119.5, "jitter_local": 0.007, "shimmer_local": 0.02, "hnr": 18.2, "mfcc0": 4.5, "mel_mean0": 13.1, "label": "PD" },
// // //   { "voiceID": "2", "meanF0Hz": 125.1, "jitter_local": 0.005, "shimmer_local": 0.015, "hnr": 20.1, "mfcc0": 4.1, "mel_mean0": 14.2, "label": "HC" },
// // //   { "voiceID": "3", "meanF0Hz": 115.8, "jitter_local": 0.008, "shimmer_local": 0.023, "hnr": 17.5, "mfcc0": 4.8, "mel_mean0": 12.8, "label": "PD" },
// // //   { "voiceID": "4", "meanF0Hz": 130.4, "jitter_local": 0.004, "shimmer_local": 0.013, "hnr": 21.5, "mfcc0": 3.9, "mel_mean0": 15.5, "label": "HC" },
// // //   { "voiceID": "5", "meanF0Hz": 122.9, "jitter_local": 0.006, "shimmer_local": 0.018, "hnr": 19.0, "mfcc0": 4.3, "mel_mean0": 13.7, "label": "PD" },
// // // ];

// // // const ModelGraphCard = ({ title, graphImage }) => (
// // //   <div className="bg-white rounded-xl shadow-lg p-6">
// // //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// // //     <img
// // //       src={graphImage}
// // //       alt={`${title} Performance Graphs`}
// // //       className="w-full h-auto rounded-lg"
// // //     />
// // //   </div>
// // // );

// // // // New component for the confusion matrix box
// // // const ConfusionMatrixCard = ({ title, matrix }) => {
// // //   if (!matrix) {
// // //     return (
// // //       <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-[300px]">
// // //         <p className="text-gray-500">Select a model to view its confusion matrix.</p>
// // //       </div>
// // //     );
// // //   }

// // //   const { TN, FP, FN, TP } = matrix;

// // //   return (
// // //     <div className="bg-white rounded-xl shadow-lg p-6">
// // //       <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
// // //       <div className="grid grid-cols-2 gap-2 text-center">
// // //         <div className="p-4 bg-green-600 text-white rounded-tl-lg">
// // //           <p className="text-lg font-semibold">True Negatives</p>
// // //           <p className="text-3xl font-bold">{TN}</p>
// // //         </div>
// // //         <div className="p-4 bg-red-600 text-white rounded-tr-lg">
// // //           <p className="text-lg font-semibold">False Positives</p>
// // //           <p className="text-3xl font-bold">{FP}</p>
// // //         </div>
// // //         <div className="p-4 bg-red-600 text-white rounded-bl-lg">
// // //           <p className="text-lg font-semibold">False Negatives</p>
// // //           <p className="text-3xl font-bold">{FN}</p>
// // //         </div>
// // //         <div className="p-4 bg-green-600 text-white rounded-br-lg">
// // //           <p className="text-lg font-semibold">True Positives</p>
// // //           <p className="text-3xl font-bold">{TP}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // function SpectrogramsPage() {
// // //   const [file, setFile] = useState(null);
// // //   const [audioURL, setAudioURL] = useState("");
// // //   const [results, setResults] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [view, setView] = useState("test");
// // //   const [selectedModel, setSelectedModel] = useState("CNN"); // Default selected model

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files?.[0] || null;
// // //     setFile(selectedFile);
// // //     if (selectedFile) {
// // //       setAudioURL(URL.createObjectURL(selectedFile));
// // //     } else {
// // //       setAudioURL("");
// // //     }
// // //     setResults(null);
// // //     setError(null);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!file) {
// // //       setError("Please select a file to upload!");
// // //       return;
// // //     }
// // //     setError(null);
// // //     setLoading(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("file", file);

// // //       const res = await fetch("http://localhost:5000/predict", {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (!res.ok) {
// // //         throw new Error("Server Error: " + res.status);
// // //       }
// // //       const data = await res.json();
// // //       setResults(data);
// // //       if (data.chunks && data.chunks.length > 0) {
// // //         const models = Object.entries(data.chunks[0].predictions);
// // //         if (models.length > 0) {
// // //           const topModel = models.sort((a, b) => b[1].score - a[1].score)[0][0];
// // //           setSelectedModel(topModel);
// // //         }
// // //       }
// // //     } catch (err) {
// // //       setError(err.message || "Something went wrong");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex bg-gray-100 min-h-screen font-sans">
// // //       {/* Sidebar Navigation */}
// // //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// // //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// // //           Dashboard 🔬
// // //         </h2>
// // //         <button
// // //           onClick={() => setView("test")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "test"
// // //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Test & Predict
// // //         </button>
// // //         <button
// // //           onClick={() => setView("metrics")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "metrics"
// // //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Model Metrics
// // //         </button>
// // //         <button
// // //           onClick={() => setView("graphs")}
// // //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// // //             view === "graphs"
// // //               ? "bg-teal-600 text-white shadow-md transform scale-105"
// // //               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
// // //           }`}
// // //         >
// // //           Performance Graphs
// // //         </button>
// // //       </div>

// // //       {/* Main Content Area */}
// // //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// // //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// // //           Parkinson's Prediction Dashboard
// // //         </h1>

// // //         {/* The combined Test & Predict View */}
// // //         {view === "test" && (
// // //           <div className="space-y-8">
// // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //               {/* Top Left: Audio Upload and Playback */}
// // //               <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
// // //                 <div>
// // //                   <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
// // //                     Select a `.wav` audio file for prediction:
// // //                   </label>
// // //                   <div className="flex items-center gap-4">
// // //                     <input
// // //                       id="file-upload"
// // //                       type="file"
// // //                       accept="audio/wav"
// // //                       onChange={handleFileChange}
// // //                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// // //                     />
// // //                     <button
// // //                       onClick={handleUpload}
// // //                       disabled={loading || !file}
// // //                       className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// // //                         loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
// // //                       }`}
// // //                     >
// // //                       {loading ? "Processing..." : "Predict"}
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //                 {audioURL && (
// // //                   <div className="mt-4">
// // //                     <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
// // //                     <audio controls src={audioURL} className="w-full" />
// // //                   </div>
// // //                 )}
// // //                 {error && (
// // //                   <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
// // //                 )}
// // //               </div>

// // //               {/* Top Right: Prediction Results */}
// // //               <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Prediction Results</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100 sticky top-0">
// // //                       <th className="border-b p-3">Model</th>
// // //                       <th className="border-b p-3">Prediction</th>
// // //                       <th className="border-b p-3">probability</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {results && results.chunks && results.chunks.length > 0 ? (
// // //                       Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
// // //                         <tr
// // //                           key={model}
// // //                           className={`hover:bg-gray-50 cursor-pointer ${selectedModel === model ? 'bg-blue-100' : ''}`}
// // //                           onClick={() => setSelectedModel(model)}
// // //                         >
// // //                           <td className="border-b p-3 font-semibold">{model}</td>
// // //                           <td className="border-b p-3">{pred.label}</td>
// // //                           <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
// // //                         </tr>
// // //                       ))
// // //                     ) : (
// // //                       <tr>
// // //                         <td colSpan="3" className="p-3 text-center text-gray-500">
// // //                           Prediction results will be displayed here.
// // //                         </td>
// // //                       </tr>
// // //                     )}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>

// // //             {/* Down: All Other Tables and Graphs */}
// // //             <div className="space-y-8">
// // //               {/* Down: Model Performance Tables (ML and DL) */}
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //                   <table className="w-full text-left border-collapse text-sm">
// // //                     <thead>
// // //                       <tr className="bg-gray-100">
// // //                         <th className="border-b p-3">Model</th>
// // //                         <th className="border-b p-3">Method</th>
// // //                         <th className="border-b p-3">Test Accuracy</th>
// // //                         <th className="border-b p-3">F1 Score</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {mlModelComparison.map((row, i) => (
// // //                         <tr key={i} className="hover:bg-gray-50">
// // //                           <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                           <td className="border-b p-3">{row.Method}</td>
// // //                           <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                           <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //   <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //   <table className="w-full text-left border-collapse text-sm">
// // //     <thead>
// // //       <tr className="bg-gray-100">
// // //         <th className="border-b p-3">Model</th>
// // //         <th className="border-b p-3">Accuracy</th>
// // //         <th className="border-b p-3">Precision</th>
// // //         <th className="border-b p-3">Recall</th>
// // //         <th className="border-b p-3">F1 Score</th>
// // //       </tr>
// // //     </thead>
// // //     <tbody>
// // //       {dlModelsResults.map((row, i) => (
// // //         <tr key={i} className="hover:bg-gray-50">
// // //           <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //           <td className="border-b p-3">{row.Accuracy}</td>
// // //           <td className="border-b p-3">{row.Precision}</td>
// // //           <td className="border-b p-3">{row.Recall}</td>
// // //           <td className="border-b p-3">{row["F1 Score"]}</td>
// // //         </tr>
// // //       ))}
// // //     </tbody>
// // //   </table>
// // // </div>
// // //               </div>

// // //               {/* Down: Confusion Matrix Plot and Feature Lists */}
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                 {/* Confusion Matrix as a dynamically rendered card */}
// // //                 <ConfusionMatrixCard
// // //                   title={`Confusion Matrix: ${selectedModel}`}
// // //                   matrix={allConfusionMatrices[selectedModel]}
// // //                 />

// // //                 <div className="bg-white p-6 rounded-xl shadow">
// // //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //                   <div className="grid grid-cols-1 gap-6">
// // //                     <div>
// // //                       <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                       <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                         {totalFeatures.map((feature, index) => (
// // //                           <li key={index} className="mb-1">{feature}</li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                       <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                         {selectedFeatures.map((feature, index) => (
// // //                           <li key={index} className="mb-1">{feature}</li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* New: Display of first 5 rows of CSV data */}
// // //               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">First 5 Rows of Italian Audio Features</h2>
// // //                 <table className="w-full text-left border-collapse text-sm">
// // //                   <thead>
// // //                     <tr className="bg-gray-100">
// // //                       {Object.keys(italianFeaturesData[0]).map((key) => (
// // //                         <th key={key} className="border-b p-3">{key}</th>
// // //                       ))}
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {italianFeaturesData.map((row, i) => (
// // //                       <tr key={i} className="hover:bg-gray-50">
// // //                         {Object.values(row).map((val, j) => (
// // //                           <td key={j} className="border-b p-3">{val}</td>
// // //                         ))}
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
              
// // //               {/* Down: Performance Graphs */}
// // //               <div className="space-y-6">
// // //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //                   Model Performance Graphs
// // //                 </h2>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //                   <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //                   <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //                   <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //                   <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* The other views are still separate */}
// // //         {view === "metrics" && (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Test Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {mlModelComparison.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">Method</th>
// // //                     <th className="border-b p-3">Accuracy</th>
// // //                     <th className="border-b p-3">F1 Score</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {dlModelsResults.map((row, i) => (
// // //                     <tr key={i} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// // //                       <td className="border-b p-3">{row.Method}</td>
// // //                       <td className="border-b p-3">{row.Accuracy}</td>
// // //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// // //               <table className="w-full text-left border-collapse text-sm">
// // //                 <thead>
// // //                   <tr className="bg-gray-100">
// // //                     <th className="border-b p-3">Model</th>
// // //                     <th className="border-b p-3">TP</th>
// // //                     <th className="border-b p-3">TN</th>
// // //                     <th className="border-b p-3">FP</th>
// // //                     <th className="border-b p-3">FN</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {Object.entries(confusionMatricesData).map(([model, vals]) => (
// // //                     <tr key={model} className="hover:bg-gray-50">
// // //                       <td className="border-b p-3 font-semibold">{model}</td>
// // //                       <td className="border-b p-3">{vals.TP}</td>
// // //                       <td className="border-b p-3">{vals.TN}</td>
// // //                       <td className="border-b p-3">{vals.FP}</td>
// // //                       <td className="border-b p-3">{vals.FN}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-xl shadow">
// // //               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// // //               <div className="grid grid-cols-1 gap-6">
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {totalFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// // //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// // //                     {selectedFeatures.map((feature, index) => (
// // //                       <li key={index} className="mb-1">{feature}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {view === "graphs" && (
// // //           <div className="space-y-6">
// // //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// // //               Model Performance Graphs
// // //             </h2>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// // //               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// // //               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// // //               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// // //               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default SpectrogramsPage;
// // import React, { useState } from "react";
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // // Import local image assets for graphs
// // import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// // import bilstmGraph from "../assets/plots/BiLSTM.png";
// // import gruGraph from "../assets/plots/GRU.png";
// // import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// // import resnetGraph from "../assets/plots/ResNet50.png";

// // // Hard-coded data
// // const mlModelComparison = [
// //   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
// //   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// //   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
// //   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
// //   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
// //   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// // ];

// // const dlModelsResults = [
// //   { Model: "CNN", Accuracy: 0.93, Precision: 0.92, Recall: 0.95, "F1 Score": 0.93 },
// //   { Model: "LSTM", Accuracy: 0.844, Precision: 0.84, Recall: 0.85, "F1 Score": 0.844 },
// //   { Model: "GRU", Accuracy: 0.796, Precision: 0.80, Recall: 0.79, "F1 Score": 0.795 },
// //   { Model: "BiLSTM", Accuracy: 0.77, Precision: 0.82, Recall: 0.71, "F1 Score": 0.76 },
// //   { Model: "ResNet50", Accuracy: 0.76, Precision: 0.71, Recall: 0.88, "F1 Score": 0.78 },
// // ];

// // // Consolidated confusion matrix data
// // const allConfusionMatrices = {
// //   "CNN": { TP: 271, TN: 262, FP: 23, FN: 14 },
// //   "ResNet50": { TP: 252, TN: 183, FP: 102, FN: 33 },
// //   "MobileNetV2": { TP: 257, TN: 259, FP: 26, FN: 28 },
// //   "BiLSTM": { TP: 203, TN: 241, FP: 44, FN: 82 },
// //   "GRU": { TP: 0, TN: 285, FP: 0, FN: 285 },
// //   "LSTM": { TP: 200, TN: 240, FP: 45, FN: 85 }, // Placeholder data
// //   "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
// //   "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
// // };

// // const totalFeatures = [
// //   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
// //   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
// //   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
// //   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
// //   "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
// // ];

// // const selectedFeatures = [
// //   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
// //   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
// //   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
// //   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
// //   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
// //   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
// //   "mel_std37", "mel_std38", "mel_std39"
// // ];

// // const italianFeaturesData = [
// //   { "voiceID": "1", "meanF0Hz": 119.5, "jitter_local": 0.007, "shimmer_local": 0.02, "hnr": 18.2, "mfcc0": 4.5, "mel_mean0": 13.1, "label": "PD" },
// //   { "voiceID": "2", "meanF0Hz": 125.1, "jitter_local": 0.005, "shimmer_local": 0.015, "hnr": 20.1, "mfcc0": 4.1, "mel_mean0": 14.2, "label": "HC" },
// //   { "voiceID": "3", "meanF0Hz": 115.8, "jitter_local": 0.008, "shimmer_local": 0.023, "hnr": 17.5, "mfcc0": 4.8, "mel_mean0": 12.8, "label": "PD" },
// //   { "voiceID": "4", "meanF0Hz": 130.4, "jitter_local": 0.004, "shimmer_local": 0.013, "hnr": 21.5, "mfcc0": 3.9, "mel_mean0": 15.5, "label": "HC" },
// //   { "voiceID": "5", "meanF0Hz": 122.9, "jitter_local": 0.006, "shimmer_local": 0.018, "hnr": 19.0, "mfcc0": 4.3, "mel_mean0": 13.7, "label": "PD" },
// // ];

// // const ModelGraphCard = ({ title, graphImage }) => (
// //   <div className="bg-white rounded-xl shadow-lg p-6">
// //     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
// //     <img
// //       src={graphImage}
// //       alt={`${title} Performance Graphs`}
// //       className="w-full h-auto rounded-lg"
// //     />
// //   </div>
// // );

// // // New component for the confusion matrix box
// // const ConfusionMatrixCard = ({ title, matrix }) => {
// //   if (!matrix) {
// //     return (
// //       <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-[300px]">
// //         <p className="text-gray-500">Select a model to view its confusion matrix.</p>
// //       </div>
// //     );
// //   }

// //   const { TN, FP, FN, TP } = matrix;
// //   const predictedPD = TP + FP;
// //   const predictedHC = TN + FN;

// //   return (
// //     <div className="bg-white rounded-xl shadow-lg p-6">
// //       <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
// //       <div className="grid grid-cols-2 gap-2 text-center">
// //         <div className="p-4 bg-green-600 text-white rounded-tl-lg">
// //           <p className="text-lg font-semibold">True Negatives (TN)</p>
// //           <p className="text-3xl font-bold">{TN}</p>
// //         </div>
// //         <div className="p-4 bg-red-600 text-white rounded-tr-lg">
// //           <p className="text-lg font-semibold">False Positives (FP)</p>
// //           <p className="text-3xl font-bold">{FP}</p>
// //         </div>
// //         <div className="p-4 bg-red-600 text-white rounded-bl-lg">
// //           <p className="text-lg font-semibold">False Negatives (FN)</p>
// //           <p className="text-3xl font-bold">{FN}</p>
// //         </div>
// //         <div className="p-4 bg-green-600 text-white rounded-br-lg">
// //           <p className="text-lg font-semibold">True Positives (TP)</p>
// //           <p className="text-3xl font-bold">{TP}</p>
// //         </div>
// //       </div>
// //       <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
// //         <p className="text-lg font-semibold text-gray-800">Predicted Counts</p>
// //         <p className="text-gray-600">
// //           <span className="font-bold text-blue-600">{predictedPD}</span> Predicted as Parkinson's
// //         </p>
// //         <p className="text-gray-600">
// //           <span className="font-bold text-green-600">{predictedHC}</span> Predicted as Healthy
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // function SpectrogramsPage() {
// //   const [file, setFile] = useState(null);
// //   const [audioURL, setAudioURL] = useState("");
// //   const [results, setResults] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [view, setView] = useState("test");
// //   const [selectedModel, setSelectedModel] = useState("CNN"); // Default selected model

// //   // New state for the voting mechanism
// //   const [votingResults, setVotingResults] = useState(null);

// //   const handleFileChange = (e) => {
// //     const selectedFile = e.target.files?.[0] || null;
// //     setFile(selectedFile);
// //     if (selectedFile) {
// //       setAudioURL(URL.createObjectURL(selectedFile));
// //     } else {
// //       setAudioURL("");
// //     }
// //     setResults(null);
// //     setError(null);
// //     setVotingResults(null); // Clear previous voting results
// //   };

// //   const handleUpload = async () => {
// //     if (!file) {
// //       setError("Please select a file to upload!");
// //       return;
// //     }
// //     setError(null);
// //     setLoading(true);

// //     try {
// //       const formData = new FormData();
// //       formData.append("file", file);

// //       const res = await fetch("http://localhost:5000/predict", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (!res.ok) {
// //         throw new Error("Server Error: " + res.status);
// //       }
// //       const data = await res.json();
// //       setResults(data);

// //       if (data.chunks && data.chunks.length > 0) {
// //         const predictions = data.chunks[0].predictions;

// //         // Voting mechanism logic
// //         let pdCount = 0;
// //         let hcCount = 0;
// //         const models = Object.entries(predictions);

// //         models.forEach(([, pred]) => {
// //           if (pred.label === "Parkinson's Disease (PD)") {
// //             pdCount++;
// //           } else {
// //             hcCount++;
// //           }
// //         });

// //         const totalVotes = pdCount + hcCount;
// //         const pdPercentage = ((pdCount / totalVotes) * 100).toFixed(0);
// //         const hcPercentage = ((hcCount / totalVotes) * 100).toFixed(0);
// //         const finalPrediction = pdCount > hcCount ? "Parkinson's Disease (PD)" : "Healthy Control (HC)";

// //         setVotingResults({
// //           finalPrediction,
// //           pdPercentage,
// //           hcPercentage,
// //         });

// //         // Set the selected model to the top-scoring one from the individual predictions
// //         if (models.length > 0) {
// //           const topModel = models.sort((a, b) => b[1].score - a[1].score)[0][0];
// //           setSelectedModel(topModel);
// //         }
// //       }
// //     } catch (err) {
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex bg-gray-100 min-h-screen font-sans">
// //       {/* Sidebar Navigation */}
// //       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
// //         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
// //           Dashboard 🔬
// //         </h2>
// //         <button
// //           onClick={() => setView("test")}
// //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// //             view === "test"
// //               ? "bg-blue-600 text-white shadow-md transform scale-105"
// //               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
// //           }`}
// //         >
// //           Test & Predict
// //         </button>
// //         <button
// //           onClick={() => setView("metrics")}
// //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// //             view === "metrics"
// //               ? "bg-purple-600 text-white shadow-md transform scale-105"
// //               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
// //           }`}
// //         >
// //           Model Metrics
// //         </button>
// //         <button
// //           onClick={() => setView("graphs")}
// //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
// //             view === "graphs"
// //               ? "bg-teal-600 text-white shadow-md transform scale-105"
// //               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
// //           }`}
// //         >
// //           Performance Graphs
// //         </button>
// //       </div>

// //       {/* Main Content Area */}
// //       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
// //         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
// //           Parkinson's Prediction Dashboard
// //         </h1>

// //         {/* The combined Test & Predict View */}
// //         {view === "test" && (
// //           <div className="space-y-8">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //               {/* Top Left: Audio Upload and Playback */}
// //               <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
// //                 <div>
// //                   <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
// //                     Select a `.wav` audio file for prediction:
// //                   </label>
// //                   <div className="flex items-center gap-4">
// //                     <input
// //                       id="file-upload"
// //                       type="file"
// //                       accept="audio/wav"
// //                       onChange={handleFileChange}
// //                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
// //                     />
// //                     <button
// //                       onClick={handleUpload}
// //                       disabled={loading || !file}
// //                       className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
// //                         loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
// //                       }`}
// //                     >
// //                       {loading ? "Processing..." : "Predict"}
// //                     </button>
// //                   </div>
// //                 </div>
// //                 {audioURL && (
// //                   <div className="mt-4">
// //                     <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
// //                     <audio controls src={audioURL} className="w-full" />
// //                   </div>
// //                 )}
// //                 {error && (
// //                   <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
// //                 )}
// //               </div>

// //               {/* New: Voting-Based Prediction Display */}
// //               {votingResults && (
// //                 <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
// //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Voting-Based Prediction</h2>
// //                   <div className="grid grid-cols-2 gap-4 text-center">
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800">Final Prediction</h3>
// //                       <p className={`text-3xl font-bold ${votingResults.finalPrediction.includes("Parkinson's") ? 'text-red-600' : 'text-green-600'}`}>
// //                         {votingResults.finalPrediction}
// //                       </p>
// //                     </div>
// //                     <div>
// //                       <h3 className="text-lg font-semibold text-gray-800">Vote Breakdown</h3>
// //                       <p className="text-xl text-gray-600">
// //                         <span className="font-bold text-blue-600">{votingResults.pdPercentage}%</span> Parkinson's
// //                       </p>
// //                       <p className="text-xl text-gray-600">
// //                         <span className="font-bold text-green-600">{votingResults.hcPercentage}%</span> Healthy
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Down: All Other Tables and Graphs */}
// //             <div className="space-y-8">
// //               {/* Down: Prediction Results Table (Individual Models) */}
// //               <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
// //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Individual Model Prediction Results</h2>
// //                 <table className="w-full text-left border-collapse text-sm">
// //                   <thead>
// //                     <tr className="bg-gray-100 sticky top-0">
// //                       <th className="border-b p-3">Model</th>
// //                       <th className="border-b p-3">Prediction</th>
// //                       <th className="border-b p-3">probability</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {results && results.chunks && results.chunks.length > 0 ? (
// //                       Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
// //                         <tr
// //                           key={model}
// //                           className={`hover:bg-gray-50 cursor-pointer ${selectedModel === model ? 'bg-blue-100' : ''}`}
// //                           onClick={() => setSelectedModel(model)}
// //                         >
// //                           <td className="border-b p-3 font-semibold">{model}</td>
// //                           <td className="border-b p-3">{pred.label}</td>
// //                           <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
// //                         </tr>
// //                       ))
// //                     ) : (
// //                       <tr>
// //                         <td colSpan="3" className="p-3 text-center text-gray-500">
// //                           Prediction results will be displayed here.
// //                         </td>
// //                       </tr>
// //                     )}
// //                   </tbody>
// //                 </table>
// //               </div>

// //               {/* Down: Model Performance Tables (ML and DL) */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// //                   <table className="w-full text-left border-collapse text-sm">
// //                     <thead>
// //                       <tr className="bg-gray-100">
// //                         <th className="border-b p-3">Model</th>
// //                         <th className="border-b p-3">Method</th>
// //                         <th className="border-b p-3">Test Accuracy</th>
// //                         <th className="border-b p-3">F1 Score</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {mlModelComparison.map((row, i) => (
// //                         <tr key={i} className="hover:bg-gray-50">
// //                           <td className="border-b p-3 font-semibold">{row.Model}</td>
// //                           <td className="border-b p-3">{row.Method}</td>
// //                           <td className="border-b p-3">{row["Test Accuracy"]}</td>
// //                           <td className="border-b p-3">{row["F1 Score"]}</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>

// //                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// //                   <table className="w-full text-left border-collapse text-sm">
// //                     <thead>
// //                       <tr className="bg-gray-100">
// //                         <th className="border-b p-3">Model</th>
// //                         <th className="border-b p-3">Accuracy</th>
// //                         <th className="border-b p-3">Precision</th>
// //                         <th className="border-b p-3">Recall</th>
// //                         <th className="border-b p-3">F1 Score</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {dlModelsResults.map((row, i) => (
// //                         <tr key={i} className="hover:bg-gray-50">
// //                           <td className="border-b p-3 font-semibold">{row.Model}</td>
// //                           <td className="border-b p-3">{row.Accuracy}</td>
// //                           <td className="border-b p-3">{row.Precision}</td>
// //                           <td className="border-b p-3">{row.Recall}</td>
// //                           <td className="border-b p-3">{row["F1 Score"]}</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>

// //               {/* Down: Confusion Matrix Plot and Feature Lists */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                 {/* Confusion Matrix as a dynamically rendered card */}
// //                 <ConfusionMatrixCard
// //                   title={`Confusion Matrix: ${selectedModel}`}
// //                   matrix={allConfusionMatrices[selectedModel]}
// //                 />

// //                 <div className="bg-white p-6 rounded-xl shadow">
// //                   <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// //                   <div className="grid grid-cols-1 gap-6">
// //                     <div>
// //                       <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// //                       <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// //                         {totalFeatures.map((feature, index) => (
// //                           <li key={index} className="mb-1">{feature}</li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// //                       <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// //                         {selectedFeatures.map((feature, index) => (
// //                           <li key={index} className="mb-1">{feature}</li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* New: Display of first 5 rows of CSV data */}
// //               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// //                 <h2 className="text-xl font-bold text-gray-800 mb-4">First 5 Rows of Italian Audio Features</h2>
// //                 <table className="w-full text-left border-collapse text-sm">
// //                   <thead>
// //                     <tr className="bg-gray-100">
// //                       {Object.keys(italianFeaturesData[0]).map((key) => (
// //                         <th key={key} className="border-b p-3">{key}</th>
// //                       ))}
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {italianFeaturesData.map((row, i) => (
// //                       <tr key={i} className="hover:bg-gray-50">
// //                         {Object.values(row).map((val, j) => (
// //                           <td key={j} className="border-b p-3">{val}</td>
// //                         ))}
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>

// //               {/* Down: Performance Graphs */}
// //               <div className="space-y-6">
// //                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
// //                   Model Performance Graphs
// //                 </h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// //                   <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// //                   <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// //                   <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// //                   <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* The other views are still separate */}
// //         {view === "metrics" && (
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// //               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
// //               <table className="w-full text-left border-collapse text-sm">
// //                 <thead>
// //                   <tr className="bg-gray-100">
// //                     <th className="border-b p-3">Model</th>
// //                     <th className="border-b p-3">Method</th>
// //                     <th className="border-b p-3">Test Accuracy</th>
// //                     <th className="border-b p-3">F1 Score</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {mlModelComparison.map((row, i) => (
// //                     <tr key={i} className="hover:bg-gray-50">
// //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// //                       <td className="border-b p-3">{row.Method}</td>
// //                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
// //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// //               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
// //               <table className="w-full text-left border-collapse text-sm">
// //                 <thead>
// //                   <tr className="bg-gray-100">
// //                     <th className="border-b p-3">Model</th>
// //                     <th className="border-b p-3">Method</th>
// //                     <th className="border-b p-3">Accuracy</th>
// //                     <th className="border-b p-3">F1 Score</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {dlModelsResults.map((row, i) => (
// //                     <tr key={i} className="hover:bg-gray-50">
// //                       <td className="border-b p-3 font-semibold">{row.Model}</td>
// //                       <td className="border-b p-3">{row.Method}</td>
// //                       <td className="border-b p-3">{row.Accuracy}</td>
// //                       <td className="border-b p-3">{row["F1 Score"]}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
// //               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
// //               <table className="w-full text-left border-collapse text-sm">
// //                 <thead>
// //                   <tr className="bg-gray-100">
// //                     <th className="border-b p-3">Model</th>
// //                     <th className="border-b p-3">TP</th>
// //                     <th className="border-b p-3">TN</th>
// //                     <th className="border-b p-3">FP</th>
// //                     <th className="border-b p-3">FN</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {Object.entries(confusionMatricesData).map(([model, vals]) => (
// //                     <tr key={model} className="hover:bg-gray-50">
// //                       <td className="border-b p-3 font-semibold">{model}</td>
// //                       <td className="border-b p-3">{vals.TP}</td>
// //                       <td className="border-b p-3">{vals.TN}</td>
// //                       <td className="border-b p-3">{vals.FP}</td>
// //                       <td className="border-b p-3">{vals.FN}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
// //               <div className="grid grid-cols-1 gap-6">
// //                 <div>
// //                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
// //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// //                     {totalFeatures.map((feature, index) => (
// //                       <li key={index} className="mb-1">{feature}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
// //                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
// //                     {selectedFeatures.map((feature, index) => (
// //                       <li key={index} className="mb-1">{feature}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {view === "graphs" && (
// //           <div className="space-y-6">
// //             <h2 className="text-2xl font-bold text-gray-800 mb-4">
// //               Model Performance Graphs
// //             </h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
// //               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
// //               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
// //               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
// //               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default SpectrogramsPage;/

// import React, { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // Import local image assets for graphs
// import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// import bilstmGraph from "../assets/plots/BiLSTM.png";
// import gruGraph from "../assets/plots/GRU.png";
// import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// import resnetGraph from "../assets/plots/ResNet50.png";

// // Hard-coded data
// const mlModelComparison = [
//   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
//   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
//   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
//   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
//   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
//   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// ];

// const dlModelsResults = [
//   { Model: "CNN", Accuracy: 0.93, Precision: 0.92, Recall: 0.95, "F1 Score": 0.93 },
//   { Model: "LSTM", Accuracy: 0.844, Precision: 0.84, Recall: 0.85, "F1 Score": 0.844 },
//   { Model: "GRU", Accuracy: 0.796, Precision: 0.80, Recall: 0.79, "F1 Score": 0.795 },
//   { Model: "BiLSTM", Accuracy: 0.77, Precision: 0.82, Recall: 0.71, "F1 Score": 0.76 },
//   { Model: "ResNet50", Accuracy: 0.76, Precision: 0.71, Recall: 0.88, "F1 Score": 0.78 },
// ];

// // Consolidated confusion matrix data
// const allConfusionMatrices = {
//   "CNN": { TP: 271, TN: 262, FP: 23, FN: 14 },
//   "ResNet50": { TP: 252, TN: 183, FP: 102, FN: 33 },
//   "MobileNetV2": { TP: 257, TN: 259, FP: 26, FN: 28 },
//   "BiLSTM": { TP: 203, TN: 241, FP: 44, FN: 82 },
//   "GRU": { TP: 0, TN: 285, FP: 0, FN: 285 },
//   "LSTM": { TP: 200, TN: 240, FP: 45, FN: 85 }, // Placeholder data
//   "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
//   "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
// };

// const totalFeatures = [
//   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
//   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
//   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
//   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
//   "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
// ];

// const selectedFeatures = [
//   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
//   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
//   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
//   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
//   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
//   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
//   "mel_std37", "mel_std38", "mel_std39"
// ];

// const italianFeaturesData = [
//   { "voiceID": "1", "meanF0Hz": 119.5, "jitter_local": 0.007, "shimmer_local": 0.02, "hnr": 18.2, "mfcc0": 4.5, "mel_mean0": 13.1, "label": "PD" },
//   { "voiceID": "2", "meanF0Hz": 125.1, "jitter_local": 0.005, "shimmer_local": 0.015, "hnr": 20.1, "mfcc0": 4.1, "mel_mean0": 14.2, "label": "HC" },
//   { "voiceID": "3", "meanF0Hz": 115.8, "jitter_local": 0.008, "shimmer_local": 0.023, "hnr": 17.5, "mfcc0": 4.8, "mel_mean0": 12.8, "label": "PD" },
//   { "voiceID": "4", "meanF0Hz": 130.4, "jitter_local": 0.004, "shimmer_local": 0.013, "hnr": 21.5, "mfcc0": 3.9, "mel_mean0": 15.5, "label": "HC" },
//   { "voiceID": "5", "meanF0Hz": 122.9, "jitter_local": 0.006, "shimmer_local": 0.018, "hnr": 19.0, "mfcc0": 4.3, "mel_mean0": 13.7, "label": "PD" },
// ];

// const ModelGraphCard = ({ title, graphImage }) => (
//   <div className="bg-white rounded-xl shadow-lg p-6">
//     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
//     <img
//       src={graphImage}
//       alt={`${title} Performance Graphs`}
//       className="w-full h-auto rounded-lg"
//     />
//   </div>
// );

// // New component for the confusion matrix box
// const ConfusionMatrixCard = ({ title, matrix }) => {
//   if (!matrix) {
//     return (
//       <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-[300px]">
//         <p className="text-gray-500">Select a model to view its confusion matrix.</p>
//       </div>
//     );
//   }

//   const { TN, FP, FN, TP } = matrix;
//   const predictedPD = TP + FP;
//   const predictedHC = TN + FN;

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
//       <div className="grid grid-cols-2 gap-2 text-center">
//         <div className="p-4 bg-green-600 text-white rounded-tl-lg">
//           <p className="text-lg font-semibold">True Negatives (TN)</p>
//           <p className="text-3xl font-bold">{TN}</p>
//         </div>
//         <div className="p-4 bg-red-600 text-white rounded-tr-lg">
//           <p className="text-lg font-semibold">False Positives (FP)</p>
//           <p className="text-3xl font-bold">{FP}</p>
//         </div>
//         <div className="p-4 bg-red-600 text-white rounded-bl-lg">
//           <p className="text-lg font-semibold">False Negatives (FN)</p>
//           <p className="text-3xl font-bold">{FN}</p>
//         </div>
//         <div className="p-4 bg-green-600 text-white rounded-br-lg">
//           <p className="text-lg font-semibold">True Positives (TP)</p>
//           <p className="text-3xl font-bold">{TP}</p>
//         </div>
//       </div>
//       <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
//         <p className="text-lg font-semibold text-gray-800">Predicted Counts</p>
//         <p className="text-gray-600">
//           <span className="font-bold text-blue-600">{predictedPD}</span> Predicted as Parkinson's
//         </p>
//         <p className="text-gray-600">
//           <span className="font-bold text-green-600">{predictedHC}</span> Predicted as Healthy
//         </p>
//       </div>
//     </div>
//   );
// };

// function SpectrogramsPage() {
//   const [file, setFile] = useState(null);
//   const [audioURL, setAudioURL] = useState("");
//   const [results, setResults] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [view, setView] = useState("test");
//   const [selectedModel, setSelectedModel] = useState("CNN"); // Default selected model

//   // New state for the voting mechanism
//   const [votingResults, setVotingResults] = useState(null);
//   // New state for extracted features
//   const [extractedFeatures, setExtractedFeatures] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0] || null;
//     setFile(selectedFile);
//     if (selectedFile) {
//       setAudioURL(URL.createObjectURL(selectedFile));
//     } else {
//       setAudioURL("");
//     }
//     setResults(null);
//     setError(null);
//     setVotingResults(null); // Clear previous voting results
//     setExtractedFeatures(null); // Clear previous extracted features
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError("Please select a file to upload!");
//       return;
//     }
//     setError(null);
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) {
//         throw new Error("Server Error: " + res.status);
//       }
//       const data = await res.json();
//       setResults(data);

//       // NEW: Set extracted features from server response
//       setExtractedFeatures(data.features || null);

//       if (data.chunks && data.chunks.length > 0) {
//         const predictions = data.chunks[0].predictions;

//         // Voting mechanism logic
//         let pdCount = 0;
//         let hcCount = 0;
//         const models = Object.entries(predictions);

//         models.forEach(([, pred]) => {
//           if (pred.label === "Parkinson's Disease (PD)") {
//             pdCount++;
//           } else {
//             hcCount++;
//           }
//         });

//         const totalVotes = pdCount + hcCount;
//         const pdPercentage = ((pdCount / totalVotes) * 100).toFixed(0);
//         const hcPercentage = ((hcCount / totalVotes) * 100).toFixed(0);
//         const finalPrediction = pdCount > hcCount ? "Parkinson's Disease (PD)" : "Healthy Control (HC)";

//         setVotingResults({
//           finalPrediction,
//           pdPercentage,
//           hcPercentage,
//         });

//         // Set the selected model to the top-scoring one from the individual predictions
//         if (models.length > 0) {
//           const topModel = models.sort((a, b) => b[1].score - a[1].score)[0][0];
//           setSelectedModel(topModel);
//         }
//       }
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen font-sans">
//       {/* Sidebar Navigation */}
//       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
//         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
//           Dashboard 🔬
//         </h2>
//         <button
//           onClick={() => setView("test")}
//           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
//             view === "test"
//               ? "bg-blue-600 text-white shadow-md transform scale-105"
//               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
//           }`}
//         >
//           Test & Predict
//         </button>
//         <button
//           onClick={() => setView("metrics")}
//           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
//             view === "metrics"
//               ? "bg-purple-600 text-white shadow-md transform scale-105"
//               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
//           }`}
//         >
//           Model Metrics
//         </button>
//         <button
//           onClick={() => setView("graphs")}
//           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
//             view === "graphs"
//               ? "bg-teal-600 text-white shadow-md transform scale-105"
//               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
//           }`}
//         >
//           Performance Graphs
//         </button>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
//           Parkinson's Prediction Dashboard
//         </h1>

//         {/* The combined Test & Predict View */}
//         {view === "test" && (
//           <div className="space-y-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Top Left: Audio Upload and Playback */}
//               <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
//                 <div>
//                   <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
//                     Select a `.wav` audio file for prediction:
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <input
//                       id="file-upload"
//                       type="file"
//                       accept="audio/wav"
//                       onChange={handleFileChange}
//                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//                     />
//                     <button
//                       onClick={handleUpload}
//                       disabled={loading || !file}
//                       className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
//                         loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
//                       }`}
//                     >
//                       {loading ? "Processing..." : "Predict"}
//                     </button>
//                   </div>
//                 </div>
//                 {audioURL && (
//                   <div className="mt-4">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
//                     <audio controls src={audioURL} className="w-full" />
//                   </div>
//                 )}
//                 {error && (
//                   <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
//                 )}
//               </div>

//               {/* NEW: Voting-Based Prediction Display */}
//               {votingResults && (
//                 <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Voting-Based Prediction</h2>
//                   <div className="grid grid-cols-2 gap-4 text-center">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">Final Prediction</h3>
//                       <p className={`text-3xl font-bold ${votingResults.finalPrediction.includes("Parkinson's") ? 'text-red-600' : 'text-green-600'}`}>
//                         {votingResults.finalPrediction}
//                       </p>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">Vote Breakdown</h3>
//                       <p className="text-lg text-gray-600">
//                         <span className="font-bold text-blue-600">{votingResults.pdPercentage}%</span> Parkinson's
//                       </p>
//                       <p className="text-lg text-gray-600">
//                         <span className="font-bold text-green-600">{votingResults.hcPercentage}%</span> Healthy
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Down: All Other Tables and Graphs */}
//             <div className="space-y-8">
//               {/* Down: Individual Model Prediction Results */}
//               <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Individual Model Prediction Results</h2>
//                 <table className="w-full text-left border-collapse text-sm">
//                   <thead>
//                     <tr className="bg-gray-100 sticky top-0">
//                       <th className="border-b p-3">Model</th>
//                       <th className="border-b p-3">Prediction</th>
//                       <th className="border-b p-3">probability</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {results && results.chunks && results.chunks.length > 0 ? (
//                       Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
//                         <tr
//                           key={model}
//                           className={`hover:bg-gray-50 cursor-pointer ${selectedModel === model ? 'bg-blue-100' : ''}`}
//                           onClick={() => setSelectedModel(model)}
//                         >
//                           <td className="border-b p-3 font-semibold">{model}</td>
//                           <td className="border-b p-3">{pred.label}</td>
//                           <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="3" className="p-3 text-center text-gray-500">
//                           Prediction results will be displayed here.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Extracted Features */}
//                 {extractedFeatures && (
//                   <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//                     <h2 className="text-xl font-bold text-gray-800 mb-4">Extracted Features</h2>
//                     <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
//                       {Object.entries(extractedFeatures).map(([feature, value]) => (
//                         <li key={feature}>
//                           <span className="font-semibold">{feature}:</span> {value?.toFixed(4) ?? "—"}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
                
//                 {/* All Features */}
//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Total Features</h2>
//                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                     {totalFeatures.map((feature, index) => (
//                       <li key={index} className="mb-1">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Selected Features */}
//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Selected K Features</h2>
//                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                     {selectedFeatures.map((feature, index) => (
//                       <li key={index} className="mb-1">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              

//               {/* Down: Model Performance Tables (ML and DL) */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
//                   <table className="w-full text-left border-collapse text-sm">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="border-b p-3">Model</th>
//                         <th className="border-b p-3">Method</th>
//                         <th className="border-b p-3">Test Accuracy</th>
//                         <th className="border-b p-3">F1 Score</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {mlModelComparison.map((row, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border-b p-3 font-semibold">{row.Model}</td>
//                           <td className="border-b p-3">{row.Method}</td>
//                           <td className="border-b p-3">{row["Test Accuracy"]}</td>
//                           <td className="border-b p-3">{row["F1 Score"]}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
//                   <table className="w-full text-left border-collapse text-sm">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="border-b p-3">Model</th>
//                         <th className="border-b p-3">Accuracy</th>
//                         <th className="border-b p-3">Precision</th>
//                         <th className="border-b p-3">Recall</th>
//                         <th className="border-b p-3">F1 Score</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {dlModelsResults.map((row, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border-b p-3 font-semibold">{row.Model}</td>
//                           <td className="border-b p-3">{row.Accuracy}</td>
//                           <td className="border-b p-3">{row.Precision}</td>
//                           <td className="border-b p-3">{row.Recall}</td>
//                           <td className="border-b p-3">{row["F1 Score"]}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Down: Confusion Matrix Plot and Feature Lists */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Confusion Matrix as a dynamically rendered card */}
//                 <ConfusionMatrixCard
//                   title={`Confusion Matrix: ${selectedModel}`}
//                   matrix={allConfusionMatrices[selectedModel]}
//                 />

//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">First 5 Rows of Italian Audio Features</h2>
//                   <table className="w-full text-left border-collapse text-sm">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         {Object.keys(italianFeaturesData[0]).map((key) => (
//                           <th key={key} className="border-b p-3">{key}</th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {italianFeaturesData.map((row, i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           {Object.values(row).map((val, j) => (
//                             <td key={j} className="border-b p-3">{val}</td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Down: Performance Graphs */}
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                   Model Performance Graphs
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
//                   <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
//                   <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
//                   <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
//                   <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* The other views are still separate */}
//         {view === "metrics" && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">Method</th>
//                     <th className="border-b p-3">Test Accuracy</th>
//                     <th className="border-b p-3">F1 Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mlModelComparison.map((row, i) => (
//                     <tr key={i} className="hover:bg-gray-50">
//                       <td className="border-b p-3 font-semibold">{row.Model}</td>
//                       <td className="border-b p-3">{row.Method}</td>
//                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
//                       <td className="border-b p-3">{row["F1 Score"]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">Accuracy</th>
//                     <th className="border-b p-3">Precision</th>
//                     <th className="border-b p-3">Recall</th>
//                     <th className="border-b p-3">F1 Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dlModelsResults.map((row, i) => (
//                     <tr key={i} className="hover:bg-gray-50">
//                       <td className="border-b p-3 font-semibold">{row.Model}</td>
//                       <td className="border-b p-3">{row.Accuracy}</td>
//                       <td className="border-b p-3">{row.Precision}</td>
//                       <td className="border-b p-3">{row.Recall}</td>
//                       <td className="border-b p-3">{row["F1 Score"]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">TP</th>
//                     <th className="border-b p-3">TN</th>
//                     <th className="border-b p-3">FP</th>
//                     <th className="border-b p-3">FN</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Object.entries(allConfusionMatrices).map(([model, vals]) => (
//                     <tr key={model} className="hover:bg-gray-50">
//                       <td className="border-b p-3 font-semibold">{model}</td>
//                       <td className="border-b p-3">{vals.TP}</td>
//                       <td className="border-b p-3">{vals.TN}</td>
//                       <td className="border-b p-3">{vals.FP}</td>
//                       <td className="border-b p-3">{vals.FN}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
//               <div className="grid grid-cols-1 gap-6">
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
//                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                     {totalFeatures.map((feature, index) => (
//                       <li key={index} className="mb-1">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
//                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                     {selectedFeatures.map((feature, index) => (
//                       <li key={index} className="mb-1">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {view === "graphs" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               Model Performance Graphs
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
//               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
//               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
//               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
//               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SpectrogramsPage;
// import React, { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// // Import local image assets for graphs
// import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
// import bilstmGraph from "../assets/plots/BiLSTM.png";
// import gruGraph from "../assets/plots/GRU.png";
// import mobilenetGraph from "../assets/plots/MobileNetV2.png";
// import resnetGraph from "../assets/plots/ResNet50.png";

// // Hard-coded data
// const mlModelComparison = [
//   { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
//   { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
//   { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
//   { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
//   { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
//   { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
// ];

// const dlModelsResults = [
//   { Model: "CNN", Accuracy: 0.93, Precision: 0.92, Recall: 0.95, "F1 Score": 0.93 },
//   { Model: "LSTM", Accuracy: 0.844, Precision: 0.84, Recall: 0.85, "F1 Score": 0.844 },
//   { Model: "GRU", Accuracy: 0.796, Precision: 0.80, Recall: 0.79, "F1 Score": 0.795 },
//   { Model: "BiLSTM", Accuracy: 0.77, Precision: 0.82, Recall: 0.71, "F1 Score": 0.76 },
//   { Model: "ResNet50", Accuracy: 0.76, Precision: 0.71, Recall: 0.88, "F1 Score": 0.78 },
// ];

// // Consolidated confusion matrix data
// const allConfusionMatrices = {
//   "CNN": { TP: 271, TN: 262, FP: 23, FN: 14 },
//   "ResNet50": { TP: 252, TN: 183, FP: 102, FN: 33 },
//   "MobileNetV2": { TP: 257, TN: 259, FP: 26, FN: 28 },
//   "BiLSTM": { TP: 203, TN: 241, FP: 44, FN: 82 },
//   "GRU": { TP: 0, TN: 285, FP: 0, FN: 285 },
//   "LSTM": { TP: 200, TN: 240, FP: 45, FN: 85 }, // Placeholder data
//   "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
//   "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
// };

// const totalFeatures = [
//   "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
//   "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
//   "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
//   "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
//   "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
// ];

// const selectedFeatures = [
//   "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
//   "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
//   "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
//   "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
//   "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
//   "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
//   "mel_std37", "mel_std38", "mel_std39"
// ];

// const italianFeaturesData = [
//   { "voiceID": "1", "meanF0Hz": 119.5, "jitter_local": 0.007, "shimmer_local": 0.02, "hnr": 18.2, "mfcc0": 4.5, "mel_mean0": 13.1, "label": "PD" },
//   { "voiceID": "2", "meanF0Hz": 125.1, "jitter_local": 0.005, "shimmer_local": 0.015, "hnr": 20.1, "mfcc0": 4.1, "mel_mean0": 14.2, "label": "HC" },
//   { "voiceID": "3", "meanF0Hz": 115.8, "jitter_local": 0.008, "shimmer_local": 0.023, "hnr": 17.5, "mfcc0": 4.8, "mel_mean0": 12.8, "label": "PD" },
//   { "voiceID": "4", "meanF0Hz": 130.4, "jitter_local": 0.004, "shimmer_local": 0.013, "hnr": 21.5, "mfcc0": 3.9, "mel_mean0": 15.5, "label": "HC" },
//   { "voiceID": "5", "meanF0Hz": 122.9, "jitter_local": 0.006, "shimmer_local": 0.018, "hnr": 19.0, "mfcc0": 4.3, "mel_mean0": 13.7, "label": "PD" },
// ];

// const ModelGraphCard = ({ title, graphImage }) => (
//   <div className="bg-white rounded-xl shadow-lg p-6">
//     <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
//     <img
//       src={graphImage}
//       alt={`${title} Performance Graphs`}
//       className="w-full h-auto rounded-lg"
//     />
//   </div>
// );

// // New component for the confusion matrix box
// const ConfusionMatrixCard = ({ title, matrix }) => {
//   if (!matrix) {
//     return (
//       <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-[300px]">
//         <p className="text-gray-500">Select a model to view its confusion matrix.</p>
//       </div>
//     );
//   }

//   const { TN, FP, FN, TP } = matrix;
//   const predictedPD = TP + FP;
//   const predictedHC = TN + FN;

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
//       <div className="grid grid-cols-2 gap-2 text-center">
//         <div className="p-4 bg-green-600 text-white rounded-tl-lg">
//           <p className="text-lg font-semibold">True Negatives (TN)</p>
//           <p className="text-3xl font-bold">{TN}</p>
//         </div>
//         <div className="p-4 bg-red-600 text-white rounded-tr-lg">
//           <p className="text-lg font-semibold">False Positives (FP)</p>
//           <p className="text-3xl font-bold">{FP}</p>
//         </div>
//         <div className="p-4 bg-red-600 text-white rounded-bl-lg">
//           <p className="text-lg font-semibold">False Negatives (FN)</p>
//           <p className="text-3xl font-bold">{FN}</p>
//         </div>
//         <div className="p-4 bg-green-600 text-white rounded-br-lg">
//           <p className="text-lg font-semibold">True Positives (TP)</p>
//           <p className="text-3xl font-bold">{TP}</p>
//         </div>
//       </div>
//       <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
//         <p className="text-lg font-semibold text-gray-800">Predicted Counts</p>
//         <p className="text-gray-600">
//           <span className="font-bold text-blue-600">{predictedPD}</span> Predicted as Parkinson's
//         </p>
//         <p className="text-gray-600">
//           <span className="font-bold text-green-600">{predictedHC}</span> Predicted as Healthy
//         </p>
//       </div>
//     </div>
//   );
// };

// function SpectrogramsPage() {
//   const [file, setFile] = useState(null);
//   const [audioURL, setAudioURL] = useState("");
//   const [results, setResults] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [view, setView] = useState("test");
//   const [selectedModel, setSelectedModel] = useState("CNN"); // Default selected model

//   const [votingResults, setVotingResults] = useState(null);
//   const [extractedFeatures, setExtractedFeatures] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0] || null;
//     setFile(selectedFile);
//     if (selectedFile) {
//       setAudioURL(URL.createObjectURL(selectedFile));
//     } else {
//       setAudioURL("");
//     }
//     setResults(null);
//     setError(null);
//     setVotingResults(null);
//     setExtractedFeatures(null);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError("Please select a file to upload!");
//       return;
//     }
//     setError(null);
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) {
//         throw new Error("Server Error: " + res.status);
//       }
//       const data = await res.json();
//       setResults(data);

//       setExtractedFeatures(data.features || null);

//       if (data.chunks && data.chunks.length > 0) {
//         const predictions = data.chunks[0].predictions;

//         let pdCount = 0;
//         let hcCount = 0;
//         const models = Object.entries(predictions);

//         models.forEach(([, pred]) => {
//           if (pred.label === "Parkinson's Disease (PD)") {
//             pdCount++;
//           } else {
//             hcCount++;
//           }
//         });

//         const totalVotes = pdCount + hcCount;
//         const pdPercentage = ((pdCount / totalVotes) * 100).toFixed(0);
//         const hcPercentage = ((hcCount / totalVotes) * 100).toFixed(0);
//         const finalPrediction = pdCount > hcCount ? "Parkinson's Disease (PD)" : "Healthy Control (HC)";

//         setVotingResults({
//           finalPrediction,
//           pdPercentage,
//           hcPercentage,
//         });

//         if (models.length > 0) {
//           const topModel = models.sort((a, b) => b[1].score - a[1].score)[0][0];
//           setSelectedModel(topModel);
//         }
//       }
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen font-sans">
//       {/* Sidebar Navigation */}
//       <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
//         <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
//           Dashboard 🔬
//         </h2>
//         <button
//           onClick={() => setView("test")}
//           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
//             view === "test"
//               ? "bg-blue-600 text-white shadow-md transform scale-105"
//               : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
//           }`}
//         >
//           Test & Predict
//         </button>
//         <button
//           onClick={() => setView("metrics")}
//           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
//             view === "metrics"
//               ? "bg-purple-600 text-white shadow-md transform scale-105"
//               : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
//           }`}
//         >
//           Model Metrics
//         </button>
//         <button
//           onClick={() => setView("graphs")}
//           className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
//             view === "graphs"
//               ? "bg-teal-600 text-white shadow-md transform scale-105"
//               : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
//           }`}
//         >
//           Performance Graphs
//         </button>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
//           Parkinson's Prediction Dashboard
//         </h1>

//         {/* The combined Test & Predict View */}
//         {view === "test" && (
//           <div className="space-y-8">
//             {/* 1. Testing and Display Results */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Top Left: Audio Upload and Playback */}
//               <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
//                 <div>
//                   <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
//                     Select a `.wav` audio file for prediction:
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <input
//                       id="file-upload"
//                       type="file"
//                       accept="audio/wav"
//                       onChange={handleFileChange}
//                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//                     />
//                     <button
//                       onClick={handleUpload}
//                       disabled={loading || !file}
//                       className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
//                         loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
//                       }`}
//                     >
//                       {loading ? "Processing..." : "Predict"}
//                     </button>
//                   </div>
//                 </div>
//                 {audioURL && (
//                   <div className="mt-4">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
//                     <audio controls src={audioURL} className="w-full" />
//                   </div>
//                 )}
//                 {error && (
//                   <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
//                 )}
//               </div>

//               {/* Top Right: Voting-Based Prediction Display */}
//               {votingResults && (
//                 <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Voting-Based Prediction</h2>
//                   <div className="grid grid-cols-2 gap-4 text-center">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">Final Prediction</h3>
//                       <p className={`text-3xl font-bold ${votingResults.finalPrediction.includes("Parkinson's") ? 'text-red-600' : 'text-green-600'}`}>
//                         {votingResults.finalPrediction}
//                       </p>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">Vote Breakdown</h3>
//                       <p className="text-lg text-gray-600">
//                         <span className="font-bold text-blue-600">{votingResults.pdPercentage}%</span> Parkinson's
//                       </p>
//                       <p className="text-lg text-gray-600">
//                         <span className="font-bold text-green-600">{votingResults.hcPercentage}%</span> Healthy
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Individual Model Prediction Results */}
//             <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Individual Model Prediction Results</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100 sticky top-0">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">Prediction</th>
//                     <th className="border-b p-3">probability</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {results && results.chunks && results.chunks.length > 0 ? (
//                     Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
//                       <tr
//                         key={model}
//                         className={`hover:bg-gray-50 cursor-pointer ${selectedModel === model ? 'bg-blue-100' : ''}`}
//                         onClick={() => setSelectedModel(model)}
//                       >
//                         <td className="border-b p-3 font-semibold">{model}</td>
//                         <td className="border-b p-3">{pred.label}</td>
//                         <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="3" className="p-3 text-center text-gray-500">
//                         Prediction results will be displayed here.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
            
//             {/* 2. Extracted Features & Selected Features */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Extracted Features */}
//               {extractedFeatures && (
//                 <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//                   <h2 className="text-xl font-bold text-gray-800 mb-4">Extracted Features</h2>
//                   <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
//                     {Object.entries(extractedFeatures).map(([feature, value]) => (
//                       <li key={feature}>
//                         <span className="font-semibold">{feature}:</span> {value?.toFixed(4) ?? "—"}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
              
//               {/* All Features */}
//               <div className="bg-white p-6 rounded-xl shadow">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Total Features</h2>
//                 <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                   {totalFeatures.map((feature, index) => (
//                     <li key={index} className="mb-1">{feature}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Selected Features */}
//               <div className="bg-white p-6 rounded-xl shadow">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Selected K Features</h2>
//                 <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                   {selectedFeatures.map((feature, index) => (
//                     <li key={index} className="mb-1">{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
            
//             {/* 3. ML and DL Model Results */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
//                 <table className="w-full text-left border-collapse text-sm">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="border-b p-3">Model</th>
//                       <th className="border-b p-3">Method</th>
//                       <th className="border-b p-3">Test Accuracy</th>
//                       <th className="border-b p-3">F1 Score</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {mlModelComparison.map((row, i) => (
//                       <tr key={i} className="hover:bg-gray-50">
//                         <td className="border-b p-3 font-semibold">{row.Model}</td>
//                         <td className="border-b p-3">{row.Method}</td>
//                         <td className="border-b p-3">{row["Test Accuracy"]}</td>
//                         <td className="border-b p-3">{row["F1 Score"]}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//                 <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
//                 <table className="w-full text-left border-collapse text-sm">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="border-b p-3">Model</th>
//                       <th className="border-b p-3">Accuracy</th>
//                       <th className="border-b p-3">Precision</th>
//                       <th className="border-b p-3">Recall</th>
//                       <th className="border-b p-3">F1 Score</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {dlModelsResults.map((row, i) => (
//                       <tr key={i} className="hover:bg-gray-50">
//                         <td className="border-b p-3 font-semibold">{row.Model}</td>
//                         <td className="border-b p-3">{row.Accuracy}</td>
//                         <td className="border-b p-3">{row.Precision}</td>
//                         <td className="border-b p-3">{row.Recall}</td>
//                         <td className="border-b p-3">{row["F1 Score"]}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* 4. Graphs and Results */}
//             <div className="space-y-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 Model Performance Graphs
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
//                 <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
//                 <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
//                 <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
//                 <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
//               </div>
//             </div>
            
//           </div>
//         )}

//         {/* The other views remain separated for navigation */}
//         {view === "metrics" && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">Method</th>
//                     <th className="border-b p-3">Test Accuracy</th>
//                     <th className="border-b p-3">F1 Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mlModelComparison.map((row, i) => (
//                     <tr key={i} className="hover:bg-gray-50">
//                       <td className="border-b p-3 font-semibold">{row.Model}</td>
//                       <td className="border-b p-3">{row.Method}</td>
//                       <td className="border-b p-3">{row["Test Accuracy"]}</td>
//                       <td className="border-b p-3">{row["F1 Score"]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">Accuracy</th>
//                     <th className="border-b p-3">Precision</th>
//                     <th className="border-b p-3">Recall</th>
//                     <th className="border-b p-3">F1 Score</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dlModelsResults.map((row, i) => (
//                     <tr key={i} className="hover:bg-gray-50">
//                       <td className="border-b p-3 font-semibold">{row.Model}</td>
//                       <td className="border-b p-3">{row.Accuracy}</td>
//                       <td className="border-b p-3">{row.Precision}</td>
//                       <td className="border-b p-3">{row.Recall}</td>
//                       <td className="border-b p-3">{row["F1 Score"]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
//               <table className="w-full text-left border-collapse text-sm">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border-b p-3">Model</th>
//                     <th className="border-b p-3">TP</th>
//                     <th className="border-b p-3">TN</th>
//                     <th className="border-b p-3">FP</th>
//                     <th className="border-b p-3">FN</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Object.entries(allConfusionMatrices).map(([model, vals]) => (
//                     <tr key={model} className="hover:bg-gray-50">
//                       <td className="border-b p-3 font-semibold">{model}</td>
//                       <td className="border-b p-3">{vals.TP}</td>
//                       <td className="border-b p-3">{vals.TN}</td>
//                       <td className="border-b p-3">{vals.FP}</td>
//                       <td className="border-b p-3">{vals.FN}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
//               <div className="grid grid-cols-1 gap-6">
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">Total Features</h3>
//                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                     {totalFeatures.map((feature, index) => (
//                       <li key={index} className="mb-1">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
//                   <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
//                     {selectedFeatures.map((feature, index) => (
//                       <li key={index} className="mb-1">{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {view === "graphs" && (
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               Model Performance Graphs
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
//               <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
//               <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
//               <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
//               <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SpectrogramsPage;

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Import local image assets for graphs
import cnnLstmGraph from "../assets/plots/CNN-LSTM.png";
import bilstmGraph from "../assets/plots/BiLSTM.png";
import gruGraph from "../assets/plots/GRU.png";
import mobilenetGraph from "../assets/plots/MobileNetV2.png";
import resnetGraph from "../assets/plots/ResNet50.png";

// Hard-coded data
const mlModelComparison = [
  { Model: "Random Forest", Method: "PCA", "Test Accuracy": 0.964, "F1 Score": 0.964 },
  { Model: "Support Vector Machine", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
  { Model: "Logistic Regression", Method: "PCA", "Test Accuracy": 0.976, "F1 Score": 0.976 },
  { Model: "Random Forest", Method: "SELECTKBEST", "Test Accuracy": 0.832, "F1 Score": 0.832 },
  { Model: "Support Vector Machine", Method: "SELECTKBEST", "Test Accuracy": 0.826, "F1 Score": 0.824 },
  { Model: "Logistic Regression", Method: "SELECTKBEST", "Test Accuracy": 0.97, "F1 Score": 0.97 },
];

const dlModelsResults = [
  { Model: "CNN", Accuracy: 0.93, Precision: 0.92, Recall: 0.95, "F1 Score": 0.93, Method: "Spectrogram" },
  { Model: "LSTM", Accuracy: 0.844, Precision: 0.84, Recall: 0.85, "F1 Score": 0.844, Method: "Spectrogram" },
  { Model: "GRU", Accuracy: 0.796, Precision: 0.80, Recall: 0.79, "F1 Score": 0.795, Method: "Spectrogram" },
  { Model: "BiLSTM", Accuracy: 0.77, Precision: 0.82, Recall: 0.71, "F1 Score": 0.76, Method: "Spectrogram" },
  { Model: "ResNet50", Accuracy: 0.76, Precision: 0.71, Recall: 0.88, "F1 Score": 0.78, Method: "Spectrogram" },
];

// Consolidated confusion matrix data
const allConfusionMatrices = {
  "CNN": { TP: 271, TN: 262, FP: 23, FN: 14 },
  "ResNet50": { TP: 252, TN: 183, FP: 102, FN: 33 },
  "MobileNetV2": { TP: 257, TN: 259, FP: 26, FN: 28 },
  "BiLSTM": { TP: 203, TN: 241, FP: 44, FN: 82 },
  "GRU": { TP: 0, TN: 285, FP: 0, FN: 285 },
  "LSTM": { TP: 200, TN: 240, FP: 45, FN: 85 }, // Placeholder data
  "Random Forest": { TP: 88, TN: 85, FP: 15, FN: 12 },
  "Support Vector Machine": { TP: 84, TN: 86, FP: 14, FN: 16 },
};

const totalFeatures = [
  "voiceID", "meanF0Hz", "maxF0Hz", "minF0Hz", "stdF0Hz", "jitter_local", "jitter_abs",
  "jitter_rap", "jitter_ddp", "jitter_ppq5", "shimmer_local", "shimmer_db",
  "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc0", "mfcc1", "mfcc2",
  "mfcc3", "mfcc4", "mfcc5", "mfcc6", "mfcc7", "mfcc8", "mfcc9", "mfcc10", "mfcc11",
  "mel_mean0-39", "mel_std0", "mel_std1-39", "label"
];

const selectedFeatures = [
  "maxF0Hz", "shimmer_apq3", "shimmer_apq5", "shimmer_dda", "hnr", "mfcc8", "mfcc9",
  "mfcc10", "mel_mean4", "mel_mean5", "mel_mean6", "mel_mean7", "mel_mean8",
  "mel_mean9", "mel_mean15", "mel_mean16", "mel_mean17", "mel_mean30",
  "mel_mean31", "mel_mean32", "mel_mean33", "mel_mean34", "mel_mean36",
  "mel_mean37", "mel_mean38", "mel_mean39", "mel_std1", "mel_std29", "mel_std30",
  "mel_std31", "mel_std32", "mel_std33", "mel_std34", "mel_std35", "mel_std36",
  "mel_std37", "mel_std38", "mel_std39"
];

const italianFeaturesData = [
  { "voiceID": "1", "meanF0Hz": 119.5, "jitter_local": 0.007, "shimmer_local": 0.02, "hnr": 18.2, "mfcc0": 4.5, "mel_mean0": 13.1, "label": "PD" },
  { "voiceID": "2", "meanF0Hz": 125.1, "jitter_local": 0.005, "shimmer_local": 0.015, "hnr": 20.1, "mfcc0": 4.1, "mel_mean0": 14.2, "label": "HC" },
  { "voiceID": "3", "meanF0Hz": 115.8, "jitter_local": 0.008, "shimmer_local": 0.023, "hnr": 17.5, "mfcc0": 4.8, "mel_mean0": 12.8, "label": "PD" },
  { "voiceID": "4", "meanF0Hz": 130.4, "jitter_local": 0.004, "shimmer_local": 0.013, "hnr": 21.5, "mfcc0": 3.9, "mel_mean0": 15.5, "label": "HC" },
  { "voiceID": "5", "meanF0Hz": 122.9, "jitter_local": 0.006, "shimmer_local": 0.018, "hnr": 19.0, "mfcc0": 4.3, "mel_mean0": 13.7, "label": "PD" },
];

const ModelGraphCard = ({ title, graphImage }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <img
      src={graphImage}
      alt={`${title} Performance Graphs`}
      className="w-full h-auto rounded-lg"
    />
  </div>
);

// New component for the confusion matrix box
const ConfusionMatrixCard = ({ title, matrix }) => {
  if (!matrix) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center h-[300px]">
        <p className="text-gray-500">Select a model to view its confusion matrix.</p>
      </div>
    );
  }

  const { TN, FP, FN, TP } = matrix;
  const predictedPD = TP + FP;
  const predictedHC = TN + FN;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="p-4 bg-green-600 text-white rounded-tl-lg">
          <p className="text-lg font-semibold">True Negatives (TN)</p>
          <p className="text-3xl font-bold">{TN}</p>
        </div>
        <div className="p-4 bg-red-600 text-white rounded-tr-lg">
          <p className="text-lg font-semibold">False Positives (FP)</p>
          <p className="text-3xl font-bold">{FP}</p>
        </div>
        <div className="p-4 bg-red-600 text-white rounded-bl-lg">
          <p className="text-lg font-semibold">False Negatives (FN)</p>
          <p className="text-3xl font-bold">{FN}</p>
        </div>
        <div className="p-4 bg-green-600 text-white rounded-br-lg">
          <p className="text-lg font-semibold">True Positives (TP)</p>
          <p className="text-3xl font-bold">{TP}</p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-lg font-semibold text-gray-800">Predicted Counts</p>
        <p className="text-gray-600">
          <span className="font-bold text-blue-600">{predictedPD}</span> Predicted as Parkinson's
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-600">{predictedHC}</span> Predicted as Healthy
        </p>
      </div>
    </div>
  );
};

function SpectrogramsPage() {
  const [file, setFile] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("test");
  const [selectedModel, setSelectedModel] = useState("CNN"); // Default selected model

  const [votingResults, setVotingResults] = useState(null);
  const [extractedFeatures, setExtractedFeatures] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setAudioURL(URL.createObjectURL(selectedFile));
    } else {
      setAudioURL("");
    }
    setResults(null);
    setError(null);
    setVotingResults(null);
    setExtractedFeatures(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload!");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Server Error: " + res.status);
      }
      const data = await res.json();
      setResults(data);

      setExtractedFeatures(data.features || null);

      if (data.chunks && data.chunks.length > 0) {
        const predictions = data.chunks[0].predictions;

        let pdCount = 0;
        let hcCount = 0;
        const models = Object.entries(predictions);

        models.forEach(([, pred]) => {
          if (pred.label === "Parkinson's Disease (PD)") {
            pdCount++;
          } else {
            hcCount++;
          }
        });

        const totalVotes = pdCount + hcCount;
        const pdPercentage = ((pdCount / totalVotes) * 100).toFixed(0);
        const hcPercentage = ((hcCount / totalVotes) * 100).toFixed(0);
        const finalPrediction = pdCount > hcCount ? "Parkinson's Disease (PD)" : "Healthy Control (HC)";

        setVotingResults({
          finalPrediction,
          pdPercentage,
          hcPercentage,
        });

        if (models.length > 0) {
          const topModel = models.sort((a, b) => b[1].score - a[1].score)[0][0];
          setSelectedModel(topModel);
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-900 text-white p-6 space-y-4 shadow-xl">
        <h2 className="text-2xl font-extrabold text-center mb-8 tracking-wider">
          Dashboard 🔬
        </h2>
        <button
          onClick={() => setView("test")}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
            view === "test"
              ? "bg-blue-600 text-white shadow-md transform scale-105"
              : "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Test & Predict
        </button>
        <button
          onClick={() => setView("metrics")}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
            view === "metrics"
              ? "bg-purple-600 text-white shadow-md transform scale-105"
              : "bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white"
          }`}
        >
          Model Metrics
        </button>
        <button
          onClick={() => setView("graphs")}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-medium ${
            view === "graphs"
              ? "bg-teal-600 text-white shadow-md transform scale-105"
              : "bg-gray-700 text-gray-200 hover:bg-teal-500 hover:text-white"
          }`}
        >
          Performance Graphs
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
          Parkinson's Prediction Dashboard
        </h1>

        {/* The combined Test & Predict View */}
        {view === "test" && (
          <div className="space-y-8">
            {/* 1. Prediction Controls and Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Left: Audio Upload and Playback */}
              <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
                <div>
                  <label htmlFor="file-upload" className="block text-gray-700 font-medium mb-2">
                    Select a `.wav` audio file for prediction:
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      id="file-upload"
                      type="file"
                      accept="audio/wav"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                    />
                    <button
                      onClick={handleUpload}
                      disabled={loading || !file}
                      className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-200 ${
                        loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md"
                      }`}
                    >
                      {loading ? "Processing..." : "Predict"}
                    </button>
                  </div>
                </div>
                {audioURL && (
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Play Uploaded Audio</h2>
                    <audio controls src={audioURL} className="w-full" />
                  </div>
                )}
                {error && (
                  <div className="mt-4 bg-red-100 p-4 rounded-xl text-red-700">{error}</div>
                )}
              </div>

              {/* Top Right: Voting-Based Prediction Display */}
              {votingResults && (
                <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Voting-Based Prediction</h2>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Final Prediction</h3>
                      <p className={`text-3xl font-bold ${votingResults.finalPrediction.includes("Parkinson's") ? 'text-red-600' : 'text-green-600'}`}>
                        {votingResults.finalPrediction}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Vote Breakdown</h3>
                      <p className="text-lg text-gray-600">
                        <span className="font-bold text-blue-600">{votingResults.pdPercentage}%</span> Parkinson's
                      </p>
                      <p className="text-lg text-gray-600">
                        <span className="font-bold text-green-600">{votingResults.hcPercentage}%</span> Healthy
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* A single-column section for the individual predictions table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Individual Model Prediction Results</h2>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 sticky top-0">
                      <th className="border-b p-3">Model</th>
                      <th className="border-b p-3">Prediction</th>
                      <th className="border-b p-3">probability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results && results.chunks && results.chunks.length > 0 ? (
                      Object.entries(results.chunks[0].predictions).map(([model, pred]) => (
                        <tr
                          key={model}
                          className={`hover:bg-gray-50 cursor-pointer ${selectedModel === model ? 'bg-blue-100' : ''}`}
                          onClick={() => setSelectedModel(model)}
                        >
                          <td className="border-b p-3 font-semibold">{model}</td>
                          <td className="border-b p-3">{pred.label}</td>
                          <td className="border-b p-3">{pred.score?.toFixed(4) ?? "—"}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="p-3 text-center text-gray-500">
                          Prediction results will be displayed here.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Extracted Features from Uploaded File */}
              {extractedFeatures && (
                <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-[400px]">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Extracted Features</h2>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100 sticky top-0">
                        <th className="border-b p-3">Feature</th>
                        <th className="border-b p-3">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(extractedFeatures).map(([feature, value]) => (
                        <tr key={feature} className="hover:bg-gray-50">
                          <td className="border-b p-3 font-semibold">{feature}</td>
                          <td className="border-b p-3">{value?.toFixed(4) ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* 2. Feature Details Section (Lists) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Total Features</h2>
                <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
                  {totalFeatures.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Selected K Features</h2>
                <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
                  {selectedFeatures.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Model Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border-b p-3">Model</th>
                      <th className="border-b p-3">Method</th>
                      <th className="border-b p-3">Test Accuracy</th>
                      <th className="border-b p-3">F1 Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mlModelComparison.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="border-b p-3 font-semibold">{row.Model}</td>
                        <td className="border-b p-3">{row.Method}</td>
                        <td className="border-b p-3">{row["Test Accuracy"]}</td>
                        <td className="border-b p-3">{row["F1 Score"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border-b p-3">Model</th>
                      <th className="border-b p-3">Accuracy</th>
                      <th className="border-b p-3">Precision</th>
                      <th className="border-b p-3">Recall</th>
                      <th className="border-b p-3">F1 Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dlModelsResults.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="border-b p-3 font-semibold">{row.Model}</td>
                        <td className="border-b p-3">{row.Accuracy}</td>
                        <td className="border-b p-3">{row.Precision}</td>
                        <td className="border-b p-3">{row.Recall}</td>
                        <td className="border-b p-3">{row["F1 Score"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Confusion Matrices and Graphs Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Confusion Matrix as a dynamically rendered card */}
              <ConfusionMatrixCard
                title={`Confusion Matrix: ${selectedModel}`}
                matrix={allConfusionMatrices[selectedModel]}
              />
              <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
                <h2 className="text-xl font-bold text-gray-800 mb-4">First 5 Rows of Italian Audio Features</h2>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      {Object.keys(italianFeaturesData[0]).map((key) => (
                        <th key={key} className="border-b p-3">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {italianFeaturesData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        {Object.values(row).map((val, j) => (
                          <td key={j} className="border-b p-3">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Down: Performance Graphs */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Model Performance Graphs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
                <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
                <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
                <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
                <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
              </div>
            </div>
            
          </div>
        )}

        {/* The other views remain separated for navigation */}
        {view === "metrics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Models</h2>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b p-3">Model</th>
                    <th className="border-b p-3">Method</th>
                    <th className="border-b p-3">Test Accuracy</th>
                    <th className="border-b p-3">F1 Score</th>
                  </tr>
                </thead>
                <tbody>
                  {mlModelComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="border-b p-3 font-semibold">{row.Model}</td>
                      <td className="border-b p-3">{row.Method}</td>
                      <td className="border-b p-3">{row["Test Accuracy"]}</td>
                      <td className="border-b p-3">{row["F1 Score"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Models</h2>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b p-3">Model</th>
                    <th className="border-b p-3">Accuracy</th>
                    <th className="border-b p-3">Precision</th>
                    <th className="border-b p-3">Recall</th>
                    <th className="border-b p-3">F1 Score</th>
                  </tr>
                </thead>
                <tbody>
                  {dlModelsResults.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="border-b p-3 font-semibold">{row.Model}</td>
                      <td className="border-b p-3">{row.Accuracy}</td>
                      <td className="border-b p-3">{row.Precision}</td>
                      <td className="border-b p-3">{row.Recall}</td>
                      <td className="border-b p-3">{row["F1 Score"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Confusion Matrices</h2>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border-b p-3">Model</th>
                    <th className="border-b p-3">TP</th>
                    <th className="border-b p-3">TN</th>
                    <th className="border-b p-3">FP</th>
                    <th className="border-b p-3">FN</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(allConfusionMatrices).map(([model, vals]) => (
                    <tr key={model} className="hover:bg-gray-50">
                      <td className="border-b p-3 font-semibold">{model}</td>
                      <td className="border-b p-3">{vals.TP}</td>
                      <td className="border-b p-3">{vals.TN}</td>
                      <td className="border-b p-3">{vals.FP}</td>
                      <td className="border-b p-3">{vals.FN}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Lists</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Total Features</h3>
                  <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
                    {totalFeatures.map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Selected Features (SELECTKBEST)</h3>
                  <ul className="list-disc list-inside columns-2 text-sm text-gray-700">
                    {selectedFeatures.map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "graphs" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Model Performance Graphs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModelGraphCard title="CNN-LSTM Performance" graphImage={cnnLstmGraph} />
              <ModelGraphCard title="BiLSTM Performance" graphImage={bilstmGraph} />
              <ModelGraphCard title="MobileNetV2 Performance" graphImage={mobilenetGraph} />
              <ModelGraphCard title="ResNet50 Performance" graphImage={resnetGraph} />
              <ModelGraphCard title="GRU Performance" graphImage={gruGraph} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpectrogramsPage;