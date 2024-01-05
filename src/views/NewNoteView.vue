<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title> New note</v-card-title>
          <v-form>
            <v-text-field label="Title"></v-text-field>
            <v-textarea
              label="Text"
              placeholder="Starting writing here.."
            ></v-textarea>
            <v-text-field label="Tags"></v-text-field>
          </v-form>
          <v-card-actions>
            <v-btn>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
