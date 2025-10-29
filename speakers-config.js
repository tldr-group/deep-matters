// Speakers configuration with bio and title information
const speakersConfig = {
  "hassan-sirelkhatim": {
    name: "Hassan Sirelkhatim",
    affiliation: "NVIDIA",
    title: "Revolutionizing AI-Driven Material Discovery Using NVIDIA ALCHEMI",
    image: "images/hassan-sirelkhatim.jpeg",
    linkedin: "https://www.linkedin.com/in/hassan-sirelkhatim/",
    bio: "Bio coming soon",
    abstract: "The discovery of novel materials is central to addressing challenges in energy, sustainability, and advanced manufacturing. However, conventional computational approaches are often limited by their high computational cost. NVIDIA ALCHEMI (AI Lab for Chemistry and Materials Innovation) explores new R&D directions to accelerate this process. A central innovation is Batched approach to simulation on which machine learning interatomic potentials (e.g., MACE, AIMNet2) achieve speedups of up 100x. By exploiting inference batching, GPU-native kernels, and CUDA-optimized libraries, ALCHEMI demonstrates how modern AI and HPC can be combined to deliver accurate, scalable, and physically consistent methods for chemical and materials discovery."
  },
  "peter-coveney": {
    name: "Prof. Peter Coveney",
    affiliation: "UCL",
    title: "The Wall Confronting Large Language Models",
    image: "images/peter-coveney.jpg",
    linkedin: "https://profiles.ucl.ac.uk/3406-peter-coveney",
    bio: "Peter Coveney is a Professor of Physical Chemistry at UCL. He is a Fellow of the Royal Academy of Engineering and Member of Academia Europaea. Coveney is active in a broad area of interdisciplinary research including condensed matter physics and chemistry, materials science, as well as human digital twins in healthcare and quantum computing applications. Dr Coveney has published well over 500 scientific papers and is the author of Virtual You (2023).  His latest book, Molecular Dynamics: Probability and Uncertainty (with Shunzhou Wan) was published on 15 May 2025.",
    abstract: "The scaling laws which determine the performance of large language models severely limit their ability to reduce the uncertainty of their predictions. Raising their reliability by brute force is intractable since the mechanism which fuels much of the learning power of LLMs also underpins error pileup. These issues also afflict large-reasoning models and agentic AI approaches which seek to provide more reliable and better informed outputs than the LLMs from which they are derived. It is essential to establish better metrics reflecting the verifiability and reliability of the predictions emanating from these and related forms of artificial intelligence systems."
  },
  "james-gin": {
    name: "James Gin-Pollock",
    affiliation: "Orbital Materials",
    title: "Generate • Simulate • Reason: Chaining Foundation Models to Discover Materials",
    image: "images/james-gin.jpg",
    linkedin: "https://www.linkedin.com/in/jamesgin/?originalSubdomain=uk",
    bio:"James leads the computational research team at Orbital Materials, a Series A funded and NVIDIA-backed startup which is developing new materials and technologies for the energy transition. Orbital's notable projects include a dual-use data centre chiller which captures ambient CO2 using waste heat, developed as a strategic partner of AWS, a two-phase GPU cooling system powered by a novel non-PFAS dielectric fluid, and the open-source machine learning interatomic potential Orb. His background is in physics and machine learning, and as an entrepreneur has founded several AI companies, one of which was acquired by Shutterstock.",
    abstract: "At Orbital Materials we accelerate materials discovery using a range of in-house foundation models - including Orb, a universal ML interatomic potential for fast, accurate simulation; diffusion-based models for steerable generation of crystal structures; and LLMs for orchestration of material science workflows. I’ll show how we built Orb, and how MLIPs and generative models are two views of the same energy landscape, connected by the Boltzmann distribution. We'll discuss practical considerations for deploying structure generative models and how missing benchmarks stall progress. Finally we'll show how LLMs can orchestrate other foundation models to accelerate real world research."
  },
  "kevin-jablonka": {
    name: "Dr. Kevin Maik Jablonka",
    affiliation: "University of Jena",
    title: "A Chemistry-Specific Large Language Model",
    image: "images/kevin-jablonka.jpg",
    linkedin: "https://kjablonka.com/?utm_source=chatgpt.com",
    bio:"Kevin Jablonka is a researcher with over 30 peer-reviewed publications in machine learning for materials science and digital chemistry. He leads an independent research group at the Helmholtz Institute for Polymers in Energy Applications of the University of Jena and the Helmholtz Center Berlin. Kevin has received numerous awards, such as the Dimitris N. Chorafas Foundation award for outstanding Ph.D. work. He is an active member of the scientific community, serving as a peer reviewer for over 20 journals and as an area chair for machine learning conferences. Kevin belongs to a new generation of scientists with a broad skill set, combining expertise in chemistry, materials science, and artificial intelligence. His research focuses on the digitization of chemistry, from developing electronic lab notebook ecosystems to creating toolboxes for digital reticular chemistry. Recently, Kevin has been at the forefront of applying Large Language Models (LLMs) to chemistry and materials science, co-organizing hackathons and workshops in this rapidly evolving field. Kevin’s research addresses challenges across scales, from atomic-level simulations to pilot plant operations, pushing the boundaries of AI-accelerated discovery in chemistry and materials science.",
    abstract:"Chemical sciences increasingly rely on data-driven techniques, but collecting structured tabular data remains challenging compared to text-based records. Large language models (LLMs) offer a solution by converting unstructured text into structured formats and directly solving predictive chemistry tasks. We have developed a chemistry-specific LLM trained on a curated dataset combining knowledge graphs, preprints, and molecular data, along with comprehensive tools for autonomous problem-solving. A specialized benchmark evaluates the model's chemical knowledge and reasoning capabilities. Our results demonstrate how LLMs can leverage both structured data and inductive biases, showcasing their significant potential for advancing chemical research and overcoming traditional machine-learning limitations in chemistry applications."  },
  
  "steven-kench": {
    name: "Dr. Steven Kench",
    affiliation: "Polaron",
    title: "Foundational models for materials manufacturing",
    image: "images/steven-kench.jpg",
    linkedin: "https://www.linkedin.com/in/steve-kench-a26a2a2b1/",
    bio:"Steve Kench completed his PhD at Imperial College London, where he developed generative machine learning methods for battery electrode design. He is now the CTO of Polaron, leading the creation of image-based AI tools for material science. His work centres on microstructural characterisation and the optimisation of manufacturing processes using small, efficient models trained on limited datasets. Steve is passionate about building AI workflows that are both powerful and practical, helping scientists and engineers accelerate R&D, enhance manufacturing efficiency, and uncover new material designs.",
    abstract:"Foundational models have transformed fields like language and vision — but materials manufacturing presents a unique challenge. Data is scarce, heterogeneous, and governed by complex physical laws. This talk explores the path toward a foundational model for materials: one that learns from images, process parameters, and structure–property relationships to understand, control, and optimise manufacturing. It will outline the key ingredients — multimodal data integration, physics-informed learning, and scalable yet efficient architectures — and discuss how such systems could unify fragmented datasets, accelerate discovery, and transform the way advanced materials are designed and produced."
  },
  "sina-samangooei": {
    name: "Dr. Sina Samangooei",
    affiliation: "CuspAI",
    title: "The CuspAI Platform: Foundation Models, Search, and Agents for Materials Discovery",
    image: "images/sina-samangooei.jpg",
    linkedin: "https://www.linkedin.com/in/sinjax/?originalSubdomain=uk",
    bio:"Sina Samangooei builds multimodal AI systems for materials discovery at CuspAI. Previously at Google DeepMind worked on Gemini and multimodal models, and before that led computer vision for autonomous vehicles at FiveAI. PhD from Southampton in biometrics and multimodal learning. Enjoys hacking on LLMs and distributed ML infrastructure. Lives in Cambridge with partner Em and two kids.",
    abstract: "Sustainable materials discovery demands AI systems that bridge generation, search, and reasoning with computational chemistry and experimental validation. CuspAI is developing an integrated platform targeting carbon capture and beyond. I'll overview our architecture—generative models, computational tools, property predictors—before discussing our foundation model work: multimodal training combining text and MLIPs, vector search over material structures. The main focus of the talk will be LLM agents: how we're building intelligent orchestration systems that coordinate discovery workflows, make reasoning decisions about which computational tools to deploy, and integrate generation, search, and validation. I'll demonstrate how these agents transform our platform from disconnected tools into a cohesive discovery engine driving materials from hypothesis to synthesis."
  },
  "lei-ge": {
    name: "Lei Ge",
    affiliation: "Imperial College London",
    title: "Do Llamas understand the periodic table?",
    image: "images/lei-ge.JPG",
    linkedin: "https://www.linkedin.com/in/ge-lei-04706b28b/?originalSubdomain=uk",
    bio:"Lei Ge is a PhD student at Imperial College London specializing in large language models (LLMs) for materials science. Her research explores how LLMs interpret and reason about chemical knowledge to improve explainability, and how LLM-based agents can be designed to accelerate materials optimization and scientific discovery. Alongside her doctoral studies, she works as a part-time Machine Learning Engineer at Polaron, applying her expertise to real-world AI applications.",
    abstract: "LLMs are increasingly used in materials science for hypothesis generation and knowledge discovery. However, how these models encode specialized scientific knowledge remains unclear. We examine how the open-source Llama models represent the periodic table of elements. By visualizing hidden-state embeddings, we observe a three-dimensional spiral structure that mirrors the conceptual organization of the periodic table. Linear probing further shows that intermediate layers encode continuous, overlapping attributes that enable indirect recall, while deeper layers refine categorical distinctions and integrate linguistic context. These findings suggest that LLMs represent scientific knowledge not as discrete symbols, but as geometric manifolds that intertwine semantics and structure across layers. Our results provide new insight into how LLMs internalize scientific concepts, offering pathways toward improved interpretability, model reliability, and the integration of AI tools in materials discovery."
  }
};

// Talk order for the schedule (7 talks total)
// Simply reorder this array to change the schedule
const talkOrder = [
  "hassan-sirelkhatim",  // Talk 1: 10:00 – 10:45
  "peter-coveney",       // Talk 2: 10:45 – 11:30
  "lei-ge",              // Talk 7: 16:40 – 17:25
  "james-gin",           // Talk 3: 12:00 – 12:45
  "steven-kench",        // Talk 5: 14:30 – 15:15
  "sina-samangooei",     // Talk 6: 15:55 – 16:40
  "kevin-jablonka",      // Talk 4: 13:45 – 14:30
];
