import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';

// Apply Storybook's project annotations to tests
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
