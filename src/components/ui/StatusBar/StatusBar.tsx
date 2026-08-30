import './StatusBar.css'

const SignalIcon = () => (
  <span className="ui-status-bar-signal" aria-hidden="true">
    <span className="ui-status-bar-signal-bar" />
    <span className="ui-status-bar-signal-bar" />
    <span className="ui-status-bar-signal-bar" />
    <span className="ui-status-bar-signal-bar" />
  </span>
)

const WifiIcon = () => (
  <span className="ui-status-bar-wifi" aria-hidden="true">
    <span className="ui-status-bar-wifi-bar" />
    <span className="ui-status-bar-wifi-bar" />
    <span className="ui-status-bar-wifi-bar" />
  </span>
)

const BatteryIcon = () => (
  <span className="ui-status-bar-battery" aria-hidden="true">
    <span className="ui-status-bar-battery-body">
      <span className="ui-status-bar-battery-fill" />
    </span>
    <span className="ui-status-bar-battery-tip" />
  </span>
)

export type StatusBarProps = {
  time?: string
}

export function StatusBar({ time = '9:41' }: StatusBarProps) {
  return (
    <div className="ui-status-bar">
      <span className="ui-status-bar-time">{time}</span>
      <span className="ui-status-bar-icons" aria-hidden="true">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  )
}
