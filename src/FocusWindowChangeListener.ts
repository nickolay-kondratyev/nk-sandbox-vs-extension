import * as vscode from 'vscode';
import * as fs from 'fs';

export class FocusWindowChangeListener implements vscode.Disposable {
  private readonly windowStateChangeSubscription: vscode.Disposable;

  constructor() {
    this.windowStateChangeSubscription = vscode.window.onDidChangeWindowState(
      this.handleWindowStateChange.bind(this)
    );
  }

  private handleWindowStateChange(windowState: vscode.WindowState): void {
    try {
      console.log("[NK] handleWindowStateChange called");

      const event = {
        timestamp: new Date().toISOString(),
        event: windowState.focused ? 'focus' : 'unfocus',
        focused: windowState.focused
      };

      console.log("[NK] Window state change event:", event);

      const jsonl = JSON.stringify(event) + '\n';
      fs.appendFileSync('/tmp/nk-sandbox-vs-extension-window-focused-events.jsonl', jsonl, 'utf8');

      // Show informational popup
      const message = `VSCode Window ${event.event.toUpperCase()} at ${event.timestamp}`;
      vscode.window.showInformationMessage(message);

    } catch (error) {
      console.error('[NK] Error handling window state change:', error);
    }
  }

  dispose(): void {
    this.windowStateChangeSubscription.dispose();
  }
}