module.exports = {
  apps: [
    {
      name: 'prod',
      script: 'yarn',
      args: 'run start',
      instances: 'max',
      exec_mode: 'cluster',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M'
    }
  ]
}
