import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';

// Apply Storybook's project annotations to tests (including a11y)
const project = setProjectAnnotations([projectAnnotations, a11yAddonAnnotations]);

beforeAll(project.beforeAll);
