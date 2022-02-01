package com.native_takehome_ts;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "native_takehome_ts";
  }

  /**
   * Config for react-native-screens
   * This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
