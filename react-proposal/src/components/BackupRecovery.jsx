export default function BackupRecovery() {
  const backupStrategy = [
    { frequency: 'Daily', type: 'Automated Incremental', desc: 'System config, model weights, user data backed up automatically every night.', icon: '🔄' },
    { frequency: 'Weekly', type: 'Full System Backup', desc: 'Complete snapshot of the entire server state. Can restore to any weekly point.', icon: '📦' },
    { frequency: 'Monthly', type: 'Off-site Copy', desc: 'Encrypted backup stored at a separate physical location for disaster recovery.', icon: '🏢' },
  ];

  const disasterRecovery = [
    { metric: 'Hardware Replacement', value: '3 days', desc: 'Warranty replacement for failed components' },
    { metric: 'Data Restoration (RTO)', value: '4 hours', desc: 'Time to restore from latest backup' },
    { metric: 'Backup Server Plan', value: 'Ready', desc: 'Pre-configured backup server image for quick swap' },
  ];

  return (
    <section id="backup" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Protection</span>
          <h2 className="section-title mt-2">
            <em className="gradient-text">Backup & Disaster Recovery</em>
          </h2>
          <p className="section-sub mt-3 max-w-2xl mx-auto">
            Your data is protected with automated backups and a clear recovery plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">Backup Strategy</h3>
            <div className="space-y-4">
              {backupStrategy.map((b) => (
                <div key={b.frequency} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{b.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">{b.frequency}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#888]">{b.type}</span>
                      </div>
                      <p className="text-sm text-[#aaa]">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Disaster Recovery</h3>
            <div className="space-y-4">
              {disasterRecovery.map((d) => (
                <div key={d.metric} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{d.metric}</span>
                    <span className="text-lg font-black gradient-text">{d.value}</span>
                  </div>
                  <p className="text-sm text-[#aaa]">{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-blue-400/10 border border-blue-400/20 rounded-xl p-5">
              <h4 className="font-semibold text-blue-400 mb-2">Backup Verification</h4>
              <p className="text-sm text-[#aaa]">
                Backups are verified monthly as part of the annual service contract.
                Test restores are performed quarterly to ensure data integrity and recovery procedures work correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
