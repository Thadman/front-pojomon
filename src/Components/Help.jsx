import React from "react";

const Help = () => {
  return (
    <div class="help-container">
      <p></p>
      <h1>POJOmon!</h1>
      When logging in for the first-time, user will be presented with an egg
      that will hatch in 10 seconds After hatching your monster will be very
      hungry and have low strength
      <h1>Stats</h1>
      <p>
        Select the STAT tab to see your monster’s statistics 
        <ul>
         <li>Name: Monster-name</li> 
         <li>Level: Show what evolution stage the monster is at</li> 
         <li>Age: Age of monster in days  </li>
         <li>Hunger: Shows how hungry monster is (0-5)</li>
         <li>Strength: Shows how strong monster is (0-5)</li>
         <li>Death: Shows how close monster is to dying (30-0)</li>
        </ul>
      </p>
      <h1>Feeding</h1>
      <p>
        Your monster gets HUNGRY over time, press the FEED button to raise your monsters hunger stat 1 point
      </p>
      <p>
      Your monster gets HUNGRY over time, press the Vitamin button to raise your monsters Strength stat 1 point
      </p>
      <p>
      If your monster is HUNGRY or has no STRENGTH for too long it may DIE.
      </p>
      <h1>Poop</h1>
      <p>
        Your monster eats and so it will poop! Press the POOP icon to clean up poop. 
        If you don’t clean up after you monster and it poops 4 times your monster will become SICK.
      </p>
      <h1>Healing</h1>
      <p>
        Select the BANDAID icon to cure your monster’s sickness If your monster
        is SICK for too long it may DIE
      </p>
      <h1>Death</h1>
      <p>
        If your monster turns into a TOMBSTONE this indicates you let your poor pet DIE… 
        Click on the RESET link to restart and get a new egg. 
        If the DEATH stat reaches 0 your pet will DIE; 
      </p>
      <p>
        Death reduces every 10 seconds when: 
      </p>
        <ul>
          <li>
            Monster has empty HUNGER (0/5) (-2 points) 
          </li>
          <li>
            Monster has empty STRENGTH (0/5) (-2 points) 
          </li>
          <li>
            Monster is SICK (-2 points)
          </li>
        </ul>
      <p>
        Note: Effects can stack and DEATH value can not be recovered. 
      </p>
      <h1>Evolution</h1>
      <p>
        As you monster gets older it will grow and EVOLVE at certain intervals changing it's appearance.
      </p>
    </div>
  );
};

export default Help;
