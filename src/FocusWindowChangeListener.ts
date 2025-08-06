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
      const event = {
        timestamp: new Date().toISOString(),
        event: windowState.focused ? 'focus' : 'unfocus',
        focused: windowState.focused
      };

      const jsonl = JSON.stringify(event) + '\n';
      fs.appendFileSync('/tmp/nk-sandbox-vs-extension-window-focused-events.jsonl', jsonl, 'utf8');

    } catch (error) {
      console.error('Error handling window state change:', error);
    }
  }

  dispose(): void {
    this.windowStateChangeSubscription.dispose();
  }
}