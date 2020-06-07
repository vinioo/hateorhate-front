import { Injectable } from '@angular/core';
import { CreateToastType } from 'blip-ds/dist/types/components/toast/toast-interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  public open(
    { actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration }: CreateToastType,
    callback?: () => {}
  ): void {
    const toast = document.createElement('bds-toast');
    document.body.appendChild(toast);

    toast.create({
      variant,
      toastText,
      toastTitle,
      duration,
      actionType,
      buttonAction,
      buttonText,
      icon,
    });

    if (callback) {
      toast.addEventListener('toastClick', () => {
        callback();
      });
    }
  }
}
