export const aiModels = [
  { name: 'Llama 3.1 8B', developer: 'Meta', size: '8B', vram: '~6GB', quality: 'GPT-3.5 level', bestFor: 'Quick tasks, light use', tier: 'starter' },
  { name: 'Llama 3.1 70B', developer: 'Meta', size: '70B', vram: '~40GB', quality: 'GPT-4 level', bestFor: 'Complex reasoning, analysis', tier: 'performance' },
  { name: 'Qwen 2.5 7B', developer: 'Alibaba', size: '7B', vram: '~6GB', quality: 'GPT-3.5 level', bestFor: 'Multilingual (Chinese/English)', tier: 'starter' },
  { name: 'Qwen 2.5 72B', developer: 'Alibaba', size: '72B', vram: '~48GB', quality: 'GPT-4 level', bestFor: 'Advanced multilingual tasks', tier: 'performance' },
  { name: 'DeepSeek V3', developer: 'DeepSeek', size: '671B', vram: '~400GB', quality: 'GPT-4o level', bestFor: 'Frontier reasoning (multi-GPU)', tier: 'enterprise' },
  { name: 'DeepSeek Coder', developer: 'DeepSeek', size: '33B', vram: '~20GB', quality: 'Excellent for code', bestFor: 'Code generation, debugging', tier: 'performance' },
  { name: 'Mistral Large', developer: 'Mistral AI', size: '123B', vram: '~80GB', quality: 'GPT-4 level', bestFor: 'Enterprise tasks, reasoning', tier: 'enterprise' },
  { name: 'Phi-3 Mini', developer: 'Microsoft', size: '3.8B', vram: '~3GB', quality: 'GPT-3 level', bestFor: 'Lightweight, fast responses', tier: 'starter' },
  { name: 'Gemma 2 27B', developer: 'Google', size: '27B', vram: '~18GB', quality: 'GPT-3.5+ level', bestFor: 'General purpose, balanced', tier: 'performance' },
  { name: 'Mixtral 8x22B', developer: 'Mistral AI', size: '141B', vram: '~90GB', quality: 'GPT-4 level', bestFor: 'Multi-task, high throughput', tier: 'enterprise' },
];

export const softwareStack = [
  { name: 'Docker', icon: '&#128051;', desc: 'Container platform. Isolates each AI service. Easy to update, backup, and scale.' },
  { name: 'Open WebUI', icon: '&#128172;', desc: 'ChatGPT-like interface. Browser-based. Multiple users simultaneously. No install needed.' },
  { name: 'Ollama', icon: '&#129302;', desc: 'Run LLM models locally. Supports Llama, Qwen, DeepSeek, Mistral. One command to start.' },
  { name: 'ComfyUI', icon: '&#127912;', desc: 'AI image generation. SDXL, FLUX. Node-based workflow. Professional quality outputs.' },
  { name: 'Unsloth', icon: '&#9889;', desc: '2-5x faster fine-tuning. Auto-learns from usage patterns. Free, open-source.' },
  { name: 'n8n', icon: '&#9881;', desc: 'Workflow automation. Connect AI to existing tools. Auto-generate reports, draft emails.' },
  { name: 'AnythingLLM', icon: '&#128218;', desc: 'RAG knowledge base. Upload company docs. AI answers based on YOUR data.' },
  { name: 'vLLM', icon: '&#128640;', desc: 'High-throughput serving. Optimized for API access. Production-grade inference.' },
];
