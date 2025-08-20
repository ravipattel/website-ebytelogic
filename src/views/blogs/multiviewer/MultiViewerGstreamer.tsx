import React from 'react'

const MultiViewerGstreamer = ({ data }) => {

    const gstreamerData = data?.gstreamerData;

    return (
        <section id={gstreamerData?.id} className="px-4 md:px-6 py-16 bg-slate-50">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8">{gstreamerData?.title}</h2>
            <div className="bg-white rounded-md p-4 md:p-8 mb-8 border-l-4 border-primary">
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                    {gstreamerData?.architecture.title}
                </h3>
                <p
                    className="text-gray-600 text-sm md:text-base mb-6"
                    dangerouslySetInnerHTML={{ __html: gstreamerData?.architecture.content }}
                />
                {gstreamerData?.mermaid?.enabled && (
                    <div className="mermaid-container">
                        <div className="mermaid-controls flex gap-4 text-gray-600">
                            {gstreamerData?.mermaid?.controls?.map((ctrl, i) => {
                                const Icon = ctrl.icon
                                return (
                                    <button
                                        key={i}
                                        className="mermaid-control-btn"
                                        title={ctrl.title}
                                    >
                                        {Icon && <Icon />}
                                    </button>
                                )
                            })}
                        </div>
                        <div className="mermaid" id={gstreamerData?.mermaid.containerId}>
                            {/* Mermaid diagram script/code injected here dynamically */}
                        </div>
                    </div>
                )}
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {gstreamerData?.featureColumns.map((column, i) => (
                    <div key={i} className="bg-white rounded-md p-6 shadow-lg">
                        <h4 className="font-semibold text-base md:text-lg mb-3">
                            {column.title}
                        </h4>
                        <p
                            className="text-gray-600 text-sm md:text-base mb-4"
                            dangerouslySetInnerHTML={{ __html: column.description }}
                        />
                        <ul className="space-y-2 text-sm text-gray-600">
                            {column.items.map((item, j) => (
                                <li key={j}>
                                    <span className="font-semibold">{item.label}:</span> {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MultiViewerGstreamer
