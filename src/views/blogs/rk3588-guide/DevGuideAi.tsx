import Image from 'next/image';

import React from 'react'

import GuideAiPng from '@/src/assets/images/blogs/blogDetails/guideAi.png'

const aiIntegrationData = {
    title: "AI Integration with RKNN",
    npuArchitectureTitle: "NPU Architecture",
    npuArchitectureDescription:
        "The RK3588's Neural Processing Unit delivers up to 6 TOPS performance with specialized architecture for AI workloads.",
    npuArchitectureCitation: {
        text: "[13]",
        link: "https://www.cnblogs.com/zyly/p/18666677"
    },
    rknpuArchitectureTitle: "RKNPU Architecture",
    rknpuArchitectureImage: GuideAiPng,
    rknnSdkWorkflowTitle: "RKNN SDK Workflow",
    rknnSdkWorkflowDescription:
        "The RKNN SDK facilitates model conversion and deployment, with RKNN-Toolkit2 running on host PCs for model optimization.",
    rknnSdkWorkflowCitation: {
        text: "[11]",
        link: "https://blog.csdn.net/qq_48361010/article/details/138973128"
    },
    modelConversionTitle: "Model Conversion",
    modelConversionSteps: [
        "Train model in framework (TF, PyTorch, etc.)",
        "Export to supported format (.onnx, .pb, .tflite)",
        "Use RKNN-Toolkit2 for conversion",
        "Quantization and optimization",
        "Generate .rknn model file"
    ],
    runtimeApiTitle: "Runtime API",
    runtimeApiSteps: [
        "rknn_init() - Load model",
        "rknn_query() - Get model info",
        "rknn_inputs_set() - Set input data",
        "rknn_run() - Execute inference",
        "rknn_outputs_get() - Retrieve results"
    ],
    rknnInferenceCode: `/* Example RKNN inference code */
rknn_context ctx;
int ret = rknn_init(&ctx, model_data, model_size, 0);
if (ret < 0) {
  printf("rknn_init failed: %d\\n", ret);
  return -1;
}
// Query input/output tensor info
rknn_tensor_attr input_attrs;
rknn_query(ctx, RKNN_QUERY_INPUT_ATTR, &input_attrs, sizeof(input_attrs));
// Prepare input (using RGA for preprocessing)
// ... RGA processing code ...
// Run inference
ret = rknn_inputs_set(ctx, 1, inputs);
ret = rknn_run(ctx, NULL);
ret = rknn_outputs_get(ctx, 1, outputs, NULL);
// Process results
// ... post-processing ...
// Cleanup
rknn_outputs_release(ctx, 1, outputs);
rknn_destroy(ctx);`,
    realWorldAiApplicationsTitle: "Real-World AI Applications",
    realWorldAiApplications: [
        {
            title: "Object Detection",
            description:
                "Using YOLO models for real-time object detection with high accuracy (95%+) and frame rates (30+ FPS).",
            citation: {
                text: "[10]",
                link: "https://cloud.baidu.com/article/3395177"
            },
            codeExample: "// YOLO processing pipeline\nCamera → ISP → RGA (resize) → NPU (YOLO inference) → Post-processing (NMS) → Bounding box rendering"
        },
        {
            title: "Face Recognition",
            description:
                "Multi-stage pipeline using RetinaFace for detection and Facenet for feature extraction.",
            citation: {
                text: "[88]",
                link: "https://blog.csdn.net/Leon_Chenl/article/details/145496335"
            },
            codeExample: "// Face recognition pipeline\nCamera → Face detection → Alignment → Feature extraction → Database matching → Access control decision"
        }
    ]
};

const DevGuideAi = () => {
    return (
        <section id="ai-integration" className="px-4 md:px-6 py-16">
            {/* Title of the Section */}
            <h2 className="font-serif text-3xl font-semibold mb-6">
                {aiIntegrationData.title}
            </h2>

            {/* NPU Architecture */}
            <h3 className="font-serif text-2xl font-semibold mb-4">
                {aiIntegrationData.npuArchitectureTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {aiIntegrationData.npuArchitectureDescription}
                <a
                    href={aiIntegrationData.npuArchitectureCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {aiIntegrationData.npuArchitectureCitation.text}
                </a>
            </p>

            {/* RKNPU Architecture Image */}
            <div className="architecture-diagram">
                <h3 className="font-serif text-xl font-semibold mb-4">
                    {aiIntegrationData.rknpuArchitectureTitle}
                </h3>
                <Image
                    src={aiIntegrationData.rknpuArchitectureImage}
                    alt="RKNPU Architecture Diagram"
                    className="w-full object-cover rounded-lg"
                />
            </div>

            {/* RKNN SDK Workflow */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-16">
                {aiIntegrationData.rknnSdkWorkflowTitle}
            </h3>
            <p className="mb-6 text-gray-600">
                {aiIntegrationData.rknnSdkWorkflowDescription}
                <a
                    href={aiIntegrationData.rknnSdkWorkflowCitation.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {aiIntegrationData.rknnSdkWorkflowCitation.text}
                </a>
            </p>

            {/* Model Conversion & Runtime API */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Model Conversion */}
                <div className="component-card">
                    <h4 className="font-semibold text-purple-600 mb-3">
                        {aiIntegrationData.modelConversionTitle}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                        {aiIntegrationData.modelConversionSteps.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>

                {/* Runtime API */}
                <div className="component-card">
                    <h4 className="font-semibold text-cyan-600 mb-3">
                        {aiIntegrationData.runtimeApiTitle}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                        {aiIntegrationData.runtimeApiSteps.map((step, index) => (
                            <li key={index} className='text-gray-600'>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* RKNN Inference Code Example */}
            <div className="bg-[#1E293B] rounded-md p-4 mb-6 text-white">
                <pre>
                    <code className='text-sm'>{aiIntegrationData.rknnInferenceCode}</code>
                </pre>
            </div>

            {/* Real-World AI Applications */}
            <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">
                {aiIntegrationData.realWorldAiApplicationsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiIntegrationData.realWorldAiApplications.map((app, index) => (
                    <div className="component-card" key={index}>
                        <h4 className="font-semibold text-purple-600 mb-3">{app.title}</h4>
                        <p className="text-sm mb-2">
                            {app.description}
                            <a
                                href={app.citation.link}
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {app.citation.text}
                            </a>
                        </p>
                        <div className="bg-[#1E293B] p-4 rounded-md text-white">
                            <pre>
                                <code className='text-sm text-wrap'>{app.codeExample}</code>
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DevGuideAi
