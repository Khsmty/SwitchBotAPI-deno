type SwitchBotDevice = {
  deviceId: string;
  deviceName: string;
  deviceType: string;
  enableCloudService: boolean;
  hubDeviceId: string;
};

type SwitchBotDeviceStatus = {
  power?: string;
  humidity?: number;
  temperature?: number;
  nebulizationEfficiency?: number;
  auto?: boolean;
  childLock?: boolean;
  sound?: boolean;
  calibrate?: boolean;
  group?: boolean;
  moving?: boolean;
  slidePosition?: number;
  mode?: number;
  speed?: number;
  shaking?: boolean;
  shakeCenter?: number;
  shakeRange?: number;
  moveDetected?: boolean;
  brightness?: string | number;
  openState?: string;
  color?: string;
  colorTemperature?: number;
  lackWater?: boolean;
  voltage?: number;
  weight?: number;
  electricityOfDay?: number;
  electricCurrent?: number;
  lockState?: string;
  doorState?: string;
};

type SwitchBotDeviceCommand = {
  command: string;
  parameter: string;
  commandType: string;
};
