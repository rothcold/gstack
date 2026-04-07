import type { HostConfig } from '../scripts/host-config';

const gemini: HostConfig = {
  name: 'gemini',
  displayName: 'Gemini CLI',
  cliCommand: 'gemini',
  cliAliases: [],

  globalRoot: '.gemini/skills/gstack',
  localSkillRoot: '.gemini/skills/gstack',
  hostSubdir: '.gemini',
  usesEnvVars: true,

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
  },

  generation: {
    generateMetadata: false,
    skipSkills: ['codex'],
  },

  pathRewrites: [
    { from: '~/.claude/skills/gstack', to: '~/.gemini/skills/gstack' },
    { from: '.claude/skills/gstack', to: '.gemini/skills/gstack' },
    { from: '.claude/skills', to: '.gemini/skills' },
  ],

  toolRewrites: {
    'the Bash tool': 'the `run_shell_command` tool',
    'the Read tool': 'the `read_file` tool',
    'the Write tool': 'the `write_file` tool',
    'the Edit tool': 'the `replace` tool',
    'the Grep tool': 'the `grep_search` tool',
    'the Glob tool': 'the `glob` tool',
    'the Agent tool': 'the `generalist` tool',
    'use the Bash tool': 'use the `run_shell_command` tool',
    'use the Read tool': 'use the `read_file` tool',
    'use the Write tool': 'use the `write_file` tool',
    'use the Edit tool': 'use the `replace` tool',
    'use the Grep tool': 'use the `grep_search` tool',
    'use the Glob tool': 'use the `glob` tool',
    'use the Agent tool': 'use the `generalist` tool',
    'AskUserQuestion': 'the `ask_user` tool',
  },

  runtimeRoot: {
    globalSymlinks: ['bin', 'browse/dist', 'browse/bin', 'gstack-upgrade', 'ETHOS.md'],
    globalFiles: {
      'review': ['checklist.md', 'TODOS-format.md'],
    },
  },

  install: {
    prefixable: false,
    linkingStrategy: 'symlink-generated',
  },

  learningsMode: 'basic',
  boundaryInstruction: 'IMPORTANT: You are running a gstack skill. Follow the instructions in the provided SKILL.md file precisely. Start by running the Preamble bash block using your `run_shell_command` tool. This block initializes essential environment variables and checks. Do NOT summarized or skip any steps. When the instructions refer to tools like "Read tool", "Write tool", "Grep tool", etc., use your equivalent tools (`read_file`, `write_file`, `grep_search`). For "AskUserQuestion", use your `ask_user` tool following the specified format.',
};

export default gemini;
