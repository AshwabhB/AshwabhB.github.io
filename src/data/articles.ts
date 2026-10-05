export type Article = {
  title: string
  summary: string
  date: string
  url: string
}

export const articles: Article[] = [
  {
    title: 'I can’t believe I’m seeing an Insecure Direct Object Reference (IDOR) vulnerability in 2026!!',
    summary:
      'I found that a popular food delivery platform exposed full customer orders through guessable URLs: names, phone numbers, addresses, and even gate codes, with no login required. This post covers how I confirmed it with a small Python script and how ownership checks or unguessable tokens prevent it.',
    date: 'May 2026',
    url: 'https://medium.com/@ashwabhbhatnagar/i-cant-believe-i-m-seeing-an-insecure-direct-object-reference-idor-vulnerability-in-2026-df2c21c7f702',
  },
  {
    title: 'Streaming Data Pipelines: How Kafka and Flink Enable Real-Time Data Processing',
    summary:
      'Kafka ingests and stores event streams, and Flink analyzes them as they arrive. This post covers how the two fit together, real-world uses like fraud detection, and what makes a streaming pipeline scalable, fault tolerant, and consistent.',
    date: 'Jan 2026',
    url: 'https://medium.com/@ashwabhbhatnagar/streaming-data-pipelines-how-kafka-and-flink-enable-real-time-data-processing-fc062add2f10',
  },
  {
    title: 'Fine-Tuning vs. Prompt Engineering: Which Is Better for Customizing Large Language Models?',
    summary:
      'A comparison of two ways to adapt an LLM to a specific task, retraining on domain data or designing better prompts. It weighs accuracy, cost, and speed, and gives a framework for choosing between them.',
    date: 'Jan 2026',
    url: 'https://medium.com/@ashwabhbhatnagar/fine-tuning-vs-prompt-engineering-which-is-better-for-customizing-large-language-models-663024f69e7f',
  },
  {
    title: 'MLOps vs. DevOps: Why AI Needs a Different Approach',
    summary:
      'DevOps practices like CI/CD and infrastructure as code are a starting point, but ML systems also need model versioning, data tracking, and drift monitoring. This post explains where MLOps extends DevOps and why.',
    date: 'May 2025',
    url: 'https://medium.com/@ashwabhbhatnagar/mlops-vs-devops-why-ai-needs-a-different-approach-bf337c396c27',
  },
  {
    title: 'LLMs vs. Small Language Models: Choosing the Right AI for Your Business',
    summary:
      'Large models handle a wide range of tasks but are expensive and slower. Small models are cheaper and faster within a narrow domain. This post compares the trade-offs in performance, cost, and scalability.',
    date: 'Apr 2025',
    url: 'https://medium.com/@ashwabhbhatnagar/llms-vs-small-language-models-choosing-the-right-ai-for-your-business-d8cedcc58355',
  },
]
