---
sidebar_position: 1
---

# Quick Start

Let's discover **WOS in less than 10 minutes**.

## Download and Installation

To get started with WOS, follow these steps to download and install the software:

- Request Access:
  - To become a beta tester, please send an email to info@wingsrobotics.com requesting access. We aim to provide prompt responses with further instructions to help you get started.
- Download and Install:
  - Upon receiving our email, visit **[b.wingsrobotics.com](https://b.wingsrobotics.com)** to access the download portal. Select the client version that corresponds to your operating system and hardware specifications.
  - Download the software and follow the installation instructions to properly set it up on your machine. Once installed, activate the software to unlock all its features and start using it effectively.

## Run WOS

### Linux & Mac

Follow these steps to set up and run WOS on Linux and Mac operating systems:

- Change directories to the folder where the WOS file was downloaded. For example:

```bash
cd ~/Downloads
```

- Before running the software, you need to make the executable file permissions. Run the following command:

```bash
chmod +x wos_v0.1.2-rc1_linux_amd64
```

- To start the software, use the ./ prefix to execute the program file from the current directory:

```bash
./wos_v0.1.2-rc1_linux_amd64
```

Replace **wos_v0.1.2-rc1_linux_amd64** with the actual file name of the downloaded software, which might vary based on the version and the release candidate number.

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

### Windows

Follow these steps to set up and run WOS on Windows operating systems:

- Press Win + R to open the Run dialog, type cmd, and press Enter, or search for "Command Prompt" in the start menu and open it.
- Use the cd command to navigate to the folder where the WOS file was downloaded. For example:

```bash
cd Downloads
```

- Simply type the executable file's name to run it. If the file name is wos_v0.x.x-rcx_windows_amd64.exe, you would type:

```bash
wos_v0.1.2-rc1_windows_amd64.exe
```

Replace **wos_v0.1.2-rc1_windows_amd64.exe** with the actual file name of the downloaded software, which might vary based on the version and the release candidate number.

### Verification

- Upon successful startup, you should see a message similar to the following in your command prompt window:

```plaintext
Apr 22 00:28:45.216 INFO Core: Initialize WOS Core
Apr 22 00:28:45.231 INFO Core: PORT port=15117 RuntimeFPS=60
Apr 22 00:28:45.231 INFO Core: RT control enabled=false base frequency=300
Apr 22 00:28:45.231 INFO Core: Build version=v0.1.2-rc1
Apr 22 00:28:45.231 INFO Core: Path Root Dir=C:\Users\xxxx/.wos Workspace=C:\Users\xxxx/.wos/workspace
Apr 22 00:28:45.231 INFO Core: Debug debug=false
Apr 22 00:28:45.233 INFO System: [MQTT API] MQTT API NOT enabled
Apr 22 00:28:45.233 INFO System: Removing ALL WOS Containers...
Apr 22 00:28:45.249 INFO System: WebService start @ URL:=http://localhost:15117
Apr 22 00:28:45.266 INFO System: WebService start @ http://192.168.179.1:15117
Apr 22 00:28:45.266 INFO System: WebService start @ http://192.168.17.1:15117
Apr 22 00:28:45.266 INFO System: WebService start @ http://10.0.0.92:15117
```

## Accessing the WOS UI

After successfully launching the WOS backend, the next step is to access its User Interface through a web browser. Here are the detailed steps:

- It is recommended to use Google Chrome to access the WOS UI for optimal compatibility and performance.
- if you are running the WOS backend on your local machine, use the following URL to access the UI:

```plaintext
http://localhost:15117
```

- If your device is connected to the same local network as the machine running the WOS backend, access the UI using the machine's IP address followed by the port number 15117. For example:

```plaintext
http://192.168.179.1:15117
```

Replace **_192.168.179.1_** with the actual IP address of the machine where the WOS backend is running.

## WOS UI

### Main Page

<div align="center">
  <img src="/img/mainpage.png" alt="Main Page" width="80%" />
</div>
Once the WOS backend is successfully launched, you will be greeted by the interface shown above. The UI is divided into several sections, each designed for specific functionalities:

- **Graph**:

  - This is a low-code programming interface that utilizes WOS’s functional modules for motion editing across multiple robot components.

- **Trigger**:

  - This section allows for the external invocation of pre-set functional modules or pre-edited graphs. Currently, it includes features like scheduled execution of modules or graphs, with more functionalities to be added progressively.

- **Appstore** (Under Development):

  - In the future, this will enable third parties—whether individuals or companies—to publish easy-to-use apps tailored for various end-user scenarios involving robotic arms.

- **Settings**:

  - Here, you can adjust general settings for WOS, manage licenses, deploy robot hardware, update software, and modify declarations.

- **Icons**

  - In the WOS UI, the top-right corner features three icons, each providing quick access to specific functionalities:
    - **_Computer Info_** - This icon gives you quick access to information about the computer system on which WOS is running. It includes details like CPU load, memory usage, and system uptime.
    - **_Debug (Hidden by Default)_** - The debug icon is used to access debugging tools and logs. This feature helps in troubleshooting and fine-tuning the performance of applications.
    - **_Robot Hardware Quick Actions_** - This icon provides shortcuts to frequently used actions related to robot hardware, such as connecting or disconnecting hardware, real-time control, and Visualize robots' states.

- **Mobile Connection**
  - On the WOS UI, navigate to the Mobile Connection section where the QR code is displayed. Use a mobile device within the same local network as the WOS server.
  - Open the QR code scanner app (most camera apps have built-in scanners) and scan the QR code displayed on the screen.
  - Select the Correct IP Address: After scanning the QR code, if multiple IP addresses appear as connection options (typically labeled as IP Address 1, IP Address 2, etc.), you will need to try each one to establish a connection. This step is necessary due to browser behavior limitations that may not automatically select the most optimal IP address.

## Play with Virtual STR400 Robot

This section guides you through the process of operating a virtual STR400 robot within the WOS interface to familiarize yourself with its functionalities. Follow these steps carefully to ensure a smooth experience.

### Initial Setup

#### Navigate to the Settings Page:

- Open the WOS UI and go to the Settings page by selecting the settings icon from the main page.

#### Verify Your License:

- Locate the License tab within the Settings page. Check to see if there is a valid license listed. The license should look something like this:

<div align="center">
  <img src="/img/license.png" alt="License Verification" />
</div>

- If no valid license appears, you need to obtain one:
  - Email [info@wingsrobotics.com](mailto:info@wingsrobotics.com) requesting a license.
  - Once you receive the license, activate it by entering the license key provided in the appropriate field and clicking the `Activate` button.
