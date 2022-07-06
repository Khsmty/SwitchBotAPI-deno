export class SwitchBotAPI {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async getDevices(): Promise<SwitchBotDevice[]> {
    const resp = await fetch("https://api.switch-bot.com/v1.0/devices", {
      headers: {
        Authorization: this.apiKey,
      },
    });
    const json = await resp.json();

    if (json.message !== "success") {
      throw new Error(json.message);
    }

    return json.body.deviceList;
  }

  public async getDeviceStatus(
    deviceId: string
  ): Promise<SwitchBotDeviceStatus> {
    const resp = await fetch(
      `https://api.switch-bot.com/v1.0/devices/${deviceId}/status`,
      {
        headers: {
          Authorization: this.apiKey,
        },
      }
    );
    const json = await resp.json();

    if (json.message !== "success") {
      throw new Error(json.message);
    }

    return json.body;
  }

  public async sendDeviceCommand(
    deviceId: string,
    command: SwitchBotDeviceCommand
  ): Promise<void> {
    const resp = await fetch(
      `https://api.switch-bot.com/v1.0/devices/${deviceId}/commands`,
      {
        method: "POST",
        headers: {
          Authorization: this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(command),
      }
    );
    const json = await resp.json();

    if (json.message !== "success") {
      throw new Error(json.message);
    }

    return;
  }
}
